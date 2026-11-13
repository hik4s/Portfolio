import { gsap } from "gsap";
import type { TextEffect } from "../editorial/MotionText";

/** Called synchronously within the route's GSAP media context, so every effect reverts. */
export function animateText(root: HTMLElement, desktop: boolean) {
  root
    .querySelectorAll<HTMLElement>("[data-text-effect]")
    .forEach((element) => {
      const effect = element.dataset.textEffect as TextEffect;
      const chars = Array.from(
        element.querySelectorAll<HTMLElement>(".motion-char"),
      );
      const words = Array.from(
        element.querySelectorAll<HTMLElement>(".motion-word"),
      );
      const trigger = { trigger: element, start: "top 90%", once: true };
      const timeline = gsap.timeline({
        scrollTrigger: trigger,
        defaults: { ease: "power2.out" },
      });
      const cadence = Math.min(0.055, 1.3 / Math.max(chars.length, 1));
      switch (effect) {
        case "typing":
          timeline.from(
            chars,
            { opacity: 0, duration: 0.01, stagger: cadence, ease: "none" },
            0.08,
          );
          chars.forEach((char, i) => {
            timeline.set(char, { "--caret-opacity": 1 }, 0.08 + i * cadence);
            timeline.set(
              char,
              { "--caret-opacity": 0 },
              0.08 + (i + 1) * cadence + (i === chars.length - 1 ? 0.25 : 0),
            );
          });
          break;
        case "glow":
          timeline
            .from(chars, { opacity: 0.18, duration: 0.65, stagger: cadence }, 0)
            .fromTo(
              chars,
              { textShadow: "0 0 0 transparent" },
              {
                textShadow: "0 0 15px #d5916980",
                duration: 0.28,
                stagger: cadence,
                repeat: 1,
                yoyo: true,
              },
              0,
            );
          break;
        case "focus":
          timeline.from(
            words,
            {
              filter: "blur(7px)",
              opacity: 0.12,
              scale: 0.94,
              y: desktop ? 18 : 8,
              duration: 0.85,
              stagger: 0.13,
            },
            0,
          );
          break;
        case "stamp":
          timeline
            .from(
              words,
              {
                opacity: 0,
                y: -7,
                scale: 1.06,
                filter: "blur(2px)",
                duration: 0.32,
                stagger: 0.16,
                ease: "power3.in",
              },
              0,
            )
            .fromTo(
              element,
              { "--stamp-opacity": 0.3 },
              { "--stamp-opacity": 0, duration: 0.8 },
              0.2,
            );
          break;
        case "wave":
          timeline
            .from(chars, { opacity: 0.2, duration: 0.5, stagger: 0.018 }, 0)
            .to(
              chars,
              {
                y: desktop ? -13 : -7,
                rotate: -4,
                duration: 0.32,
                stagger: 0.025,
                ease: "sine.inOut",
                repeat: 1,
                yoyo: true,
              },
              0,
            );
          break;
        case "outline":
          timeline.fromTo(
            chars,
            { "--ink-fill": "0%" },
            {
              "--ink-fill": "100%",
              duration: 0.9,
              stagger: 0.025,
              ease: "power2.inOut",
            },
            0,
          );
          break;
        case "assembly":
          timeline.from(
            chars,
            {
              x: (i) => (i % 2 ? 14 : -14),
              y: (i) => (i % 3 ? 18 : -18),
              rotate: (i) => (i % 2 ? 12 : -12),
              scale: 0.7,
              opacity: 0,
              duration: 0.8,
              stagger: 0.025,
              ease: "power3.out",
            },
            0,
          );
          break;
        case "light":
          timeline
            .fromTo(
              words,
              { "--light-position": "-130%" },
              {
                "--light-position": "130%",
                duration: 0.75,
                stagger: 0.12,
                ease: "power2.inOut",
              },
              0,
            )
            .to(
              element,
              { "--mark-scale": 1, duration: 0.6 },
              0.45 + words.length * 0.09,
            );
          break;
        case "morph": {
          const frames = Array.from(
            element.querySelectorAll<HTMLElement>(".morph-frame"),
          );
          timeline.set(frames, { opacity: 0, y: 0, filter: "blur(0px)" }, 0);
          frames.forEach((frame, i) => {
            timeline.fromTo(
              frame,
              { opacity: 0, y: 12, filter: "blur(4px)" },
              { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.4 },
              i * 0.85,
            );
            if (i < frames.length - 1)
              timeline.to(
                frame,
                { opacity: 0, y: -12, filter: "blur(4px)", duration: 0.3 },
                i * 0.85 + 0.6,
              );
          });
          break;
        }
      }
    });
}
