"""Generate the exact typographic social card. Requires Pillow; not needed for npm build."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
root = Path(__file__).resolve().parents[1]
image = Image.new('RGB', (1200, 630), '#f1eadc')
draw = ImageDraw.Draw(image)
font = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
bold = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
serif = '/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf'
def text(x,y,label,size=24,color='#282922',face=font):
    draw.text((x,y),label,font=ImageFont.truetype(face,size),fill=color)
draw.line((65,110,1135,110),fill='#b8afa0',width=1)
text(65,40,'kauan /',38)
text(820,60,'PORTFÓLIO · 2026',18)
text(65,170,'Curiosidade',84,face=bold)
text(65,275,'que vira código.',84,color='#a83e29',face=serif)
text(70,420,'Kauan Inacio dos Santos',28)
text(70,475,'Python  /  Full Stack  /  Automação',24,color='#6a6559')
draw.line((65,558,1135,558),fill='#b8afa0',width=1)
text(70,580,'PROJETOS  ·  DECISÕES  ·  CÓDIGO',15)
text(960,400,'{ / }',72,color='#a83e29',face=serif)
image.save(root/'public/assets/social-card.png', optimize=True)
