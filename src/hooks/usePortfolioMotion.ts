import { useEffect } from "react";
import type { RefObject } from "react";

/** Presentation effects only; interactive content is managed by React state. */
export function usePortfolioMotion(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !window.matchMedia || !("IntersectionObserver" in window))
      return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const frames = new Set<number>();
    const animations = new Set<Animation>();
    const observers: IntersectionObserver[] = [];
    let disposed = false;
    const alphabet = "{}[]#@$%*<>/+=_";

    function schedule(callback: FrameRequestCallback) {
      const handle = requestAnimationFrame((time) => {
        frames.delete(handle);
        if (!disposed) callback(time);
      });
      frames.add(handle);
    }

    // Each observed span contains decorative text with a stable accessible heading.
    function scramble(element: HTMLElement) {
      const text = element.dataset.text;
      if (!text || reduced.matches) return;
      let start: number | undefined;
      let lastTick = -1;
      const letters = Array.from(text);
      function frame(now: number) {
        if (!element.isConnected || reduced.matches) return;
        start ??= now;
        const progress = Math.min(1, (now - start) / 3000);
        const tick = Math.floor((now - start) / 95);
        if (tick !== lastTick || progress === 1) {
          lastTick = tick;
          const resolved = Math.floor(
            Math.max(0, (progress - 0.18) / 0.82) * letters.length,
          );
          element.textContent = letters
            .map((character, index) =>
              character === " " || index < resolved
                ? character
                : alphabet[Math.floor(Math.random() * alphabet.length)],
            )
            .join("");
        }
        if (progress < 1) schedule(frame);
        else element.textContent = text!;
      }
      schedule(frame);
    }

    function animate(
      element: Element,
      keyframes: Keyframe[],
      options: KeyframeAnimationOptions,
    ) {
      if (reduced.matches || !("animate" in element)) return;
      const animation = element.animate(keyframes, options);
      animations.add(animation);
    }

    const reveal = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target as HTMLElement;
          element.classList.remove("wait");
          if (element.dataset.text) scramble(element);
          reveal.unobserve(element);
        }
      },
      { threshold: 0.12 },
    );
    observers.push(reveal);
    root
      .querySelectorAll<HTMLElement>(".reveal, [data-text]")
      .forEach((element) => {
        if (!reduced.matches && element.classList.contains("reveal"))
          element.classList.add("wait");
        reveal.observe(element);
      });

    const scenes = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          entry.target.classList.toggle("in-scene", entry.isIntersecting);
      },
      { threshold: 0.2 },
    );
    observers.push(scenes);
    root
      .querySelectorAll(".demo")
      .forEach((element) => scenes.observe(element));

    // Play each brand once. Leaving the viewport never leaves an image invisible.
    const brands = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const stage = entry.target as HTMLElement;
          brands.unobserve(stage);
          if (reduced.matches) continue;
          const logo = stage.dataset.logo;
          if (logo === "career") stage.classList.add("playing");
          else if (logo === "nexa" || logo === "relatpy") {
            stage
              .querySelectorAll(".brand-master path")
              .forEach((path, index) => {
                animate(
                  path,
                  [
                    {
                      transform: `translate${logo === "nexa" ? "Y" : "X"}(${index === 0 ? -22 : 22}px)`,
                      opacity: 0.1,
                    },
                    { transform: "translate(0, 0)", opacity: 1 },
                  ],
                  {
                    duration: 1900,
                    delay: index * 500,
                    easing: "ease-out",
                    fill: "both",
                  },
                );
              });
          } else {
            const image = stage.querySelector("img");
            if (image)
              animate(
                image,
                [
                  {
                    transform:
                      logo === "nexus"
                        ? "rotate(-90deg) scale(.35)"
                        : "translateX(-20px)",
                    opacity: 0.1,
                  },
                  { transform: "rotate(0deg) scale(1)", opacity: 1 },
                ],
                { duration: 2600, easing: "ease-out", fill: "both" },
              );
          }
        }
      },
      { threshold: 0.45 },
    );
    observers.push(brands);
    root.querySelectorAll("[data-logo]").forEach((element) => {
      element.classList.add("motion-ready");
      brands.observe(element);
    });

    const hero = root.querySelector<HTMLElement>(".hero");
    function resetParallax() {
      ["--dx", "--dy", "--art-x", "--art-y"].forEach((property) =>
        hero?.style.removeProperty(property),
      );
    }
    function onPointerMove(event: PointerEvent) {
      if (!hero || reduced.matches || event.pointerType === "touch") return;
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      hero.style.setProperty("--dx", `${x * 28}px`);
      hero.style.setProperty("--dy", `${y * 28}px`);
      hero.style.setProperty("--art-x", `${x * 22}px`);
      hero.style.setProperty("--art-y", `${y * 18}px`);
    }
    function restoreText() {
      root!.querySelectorAll<HTMLElement>("[data-text]").forEach((element) => {
        element.textContent = element.dataset.text ?? "";
      });
      root!
        .querySelectorAll(".wait")
        .forEach((element) => element.classList.remove("wait"));
    }
    function onMotionChange() {
      if (!reduced.matches) return;
      frames.forEach(cancelAnimationFrame);
      frames.clear();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      restoreText();
      resetParallax();
    }
    hero?.addEventListener("pointermove", onPointerMove);
    hero?.addEventListener("pointerleave", resetParallax);
    reduced.addEventListener("change", onMotionChange);

    return () => {
      disposed = true;
      observers.forEach((observer) => observer.disconnect());
      root
        .querySelectorAll(".motion-ready")
        .forEach((element) => element.classList.remove("motion-ready"));
      frames.forEach(cancelAnimationFrame);
      animations.forEach((animation) => animation.cancel());
      hero?.removeEventListener("pointermove", onPointerMove);
      hero?.removeEventListener("pointerleave", resetParallax);
      reduced.removeEventListener("change", onMotionChange);
      restoreText();
      resetParallax();
    };
  }, [rootRef]);
}
