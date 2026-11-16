"""Optional browser QA: pip install playwright; playwright install chromium.
Run against npm run dev at http://127.0.0.1:5173. Artifacts are local only.
"""
import asyncio, json, os
from pathlib import Path
from playwright.async_api import async_playwright
out=Path(__file__).resolve().parents[1] / 'test-results/recruiter'
out.mkdir(exist_ok=True)
async def main():
 async with async_playwright() as p:
  browser=await p.chromium.launch(headless=True, **({'executable_path': os.environ['PLAYWRIGHT_CHROMIUM_EXECUTABLE']} if os.environ.get('PLAYWRIGHT_CHROMIUM_EXECUTABLE') else {}))
  results=[]
  for label,width,height in [('desktop',1440,1000),('mobile',390,844)]:
   context=await browser.new_context(viewport={'width':width,'height':height},reduced_motion='reduce')
   page=await context.new_page();errors=[]
   page.on('pageerror',lambda e: errors.append(str(e)))
   await page.goto('http://127.0.0.1:5173/',wait_until='networkidle')
   await page.screenshot(path=str(out/f'{label}-opening.png'))
   await page.locator('#selecionados').scroll_into_view_if_needed()
   await page.screenshot(path=str(out/f'{label}-projects.png'))
   for lang in ['pt','en']:
    if lang=='en': await page.get_by_role('button',name='Read in English').click()
    await page.locator('#selecionados').scroll_into_view_if_needed()
    overflow=await page.evaluate('document.documentElement.scrollWidth > window.innerWidth')
    links=await page.locator('#selecionados a').evaluate_all('(els) => els.map(e => ({text:e.textContent,href:e.href}))')
    assert not overflow, (label,lang,'horizontal overflow')
    assert not errors, (label,lang,errors)
    assert not await page.locator('a[href*="github.com/hik4s/Nexer"]').count()
    results.append({'viewport':label,'language':lang,'overflow':overflow,'links':links,'errors':list(errors)})
   await page.goto('http://127.0.0.1:5173/#case/career',wait_until='networkidle')
   assert await page.get_by_role('heading',name='The problem').count()==1
   await context.close()
  await browser.close()
  (out/'browser-checks.json').write_text(json.dumps(results,indent=2,ensure_ascii=False))
  print(json.dumps(results,indent=2,ensure_ascii=False))
asyncio.run(main())
