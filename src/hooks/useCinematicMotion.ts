import { useEffect, useState } from "react";
import type { RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

/** One scoped choreography per mounted route. React owns content and interactions. */
export function useCinematicMotion(rootRef: RefObject<HTMLElement | null>) {
  const [userReduced, setReduced] = useState(() => {
    try {
      return localStorage.getItem("kauan-motion") === "reduced";
    } catch {
      return false;
    }
  });
  const [systemReduced, setSystemReduced] = useState(
    () => !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
  );
  const reduced = userReduced || systemReduced;
  useEffect(() => {
    const preference = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!preference) return;
    const update = () => setSystemReduced(preference.matches);
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!reduced) return;
    const previous = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    return () => {
      document.documentElement.style.scrollBehavior = previous;
    };
  }, [reduced]);
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !window.matchMedia || reduced) return;
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    const media = gsap.matchMedia();
    media.add(
      {
        systemReduced: "(prefers-reduced-motion: reduce)",
        desktop: "(min-width: 800px)",
        mobile: "(max-width: 799px)",
      },
      (context) => {
        if (reduced || context.conditions?.systemReduced) return;
        const desktop = !!context.conditions?.desktop;
        const select = gsap.utils.selector(root);
        root.dataset.cinematic = "active";
        const hero = select(".editorial-hero")[0];
        if (hero) {
          const opening = gsap.timeline({ defaults: { ease: "power3.out" } });
          opening
            .from(select(".hero-kicker, .hero-copy > .eyebrow"), {
              y: 16,
              opacity: 0,
              duration: 0.8,
              stagger: 0.12,
            })
            .from(
              select(".hero-copy h1"),
              {
                y: desktop ? 65 : 25,
                clipPath: "inset(0 0 100% 0)",
                duration: 1.15,
              },
              0.12,
            )
            .from(
              select(".hero-description, .hero-actions, .availability"),
              { y: 24, opacity: 0, stagger: 0.12, duration: 0.9 },
              0.5,
            )
            .fromTo(
              select(".author-card"),
              {
                y: 60,
                rotateY: desktop ? -14 : 0,
                rotateZ: -6,
                scale: 0.94,
                opacity: 0,
              },
              {
                y: 0,
                rotateY: 0,
                rotateZ: 2,
                scale: 1,
                opacity: 1,
                duration: 1.35,
              },
              0.18,
            )
            .from(
              select(".hero-orbit path"),
              { strokeDashoffset: 1, duration: 1.8, ease: "power2.inOut" },
              0.3,
            );
          gsap.to(select(".hero-orbit"), {
            y: desktop ? 100 : 30,
            rotate: 8,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
          gsap.to(select(".author-card"), {
            y: desktop ? -70 : -20,
            rotateZ: -2,
            rotateY: desktop ? 7 : 0,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
        select(".project-chapter").forEach(
          (chapter: HTMLElement, index: number) => {
            const q = gsap.utils.selector(chapter);
            gsap.from(
              q(
                ".chapter-header, .chapter-narrative > h2, .chapter-summary, .tech-chips, .chapter-actions",
              ),
              {
                y: desktop ? 45 : 20,
                opacity: 0,
                stagger: 0.085,
                duration: 0.85,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: chapter,
                  start: "top 83%",
                  once: true,
                },
              },
            );
            gsap.from(q(".chapter-product"), {
              y: desktop ? 90 : 35,
              rotate: index % 2 ? 3 : -3,
              scale: 0.95,
              opacity: 0.25,
              duration: 1.3,
              ease: "power3.out",
              scrollTrigger: {
                trigger: q(".chapter-product")[0],
                start: "top 90%",
                once: true,
              },
            });
            gsap.fromTo(
              q(".chapter-watermark"),
              { xPercent: index % 2 ? -8 : 8 },
              {
                xPercent: index % 2 ? 8 : -8,
                ease: "none",
                scrollTrigger: {
                  trigger: chapter,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.2,
                },
              },
            );
          },
        );
        select(".project-sequence").forEach(
          (scene: HTMLElement, index: number) => {
            const q = gsap.utils.selector(scene);
            const cards = q(".sequence-card");
            const flow = gsap.timeline({
              scrollTrigger: {
                trigger: scene,
                start: "top 88%",
                end: "center 40%",
                scrub: 0.7,
              },
            });
            flow.from(
              q(".sequence-track path"),
              { strokeDashoffset: 1, duration: 1.4 },
              0,
            );
            cards.forEach((card: HTMLElement, i: number) => {
              flow.from(
                card,
                {
                  y: desktop ? (i % 2 ? -55 : 55) : 20,
                  x: index === 1 ? (i - 1) * 35 : 0,
                  rotate:
                    index === 0 ? (i - 1) * 12 : index === 3 ? (i - 1) * -6 : 0,
                  scale: 0.8,
                  opacity: 0.15,
                  duration: 0.65,
                  ease: "power2.out",
                },
                i * 0.25,
              );
              flow.from(
                card.querySelector(".sequence-rule"),
                { scaleX: 0, transformOrigin: "left", duration: 0.5 },
                0.3 + i * 0.25,
              );
            });
          },
        );
        select(".chapter-bridge").forEach((bridge: HTMLElement) => {
          const q = gsap.utils.selector(bridge);
          const path = bridge.querySelector<SVGPathElement>(
            ".bridge-thread path",
          )!;
          gsap
            .timeline({
              scrollTrigger: {
                trigger: bridge,
                start: "top 90%",
                end: "bottom 25%",
                scrub: 0.8,
              },
            })
            .fromTo(
              path,
              { strokeDashoffset: 1 },
              { strokeDashoffset: 0, ease: "none", duration: 1 },
              0,
            )
            .fromTo(
              q(".bridge-traveler"),
              { opacity: 0 },
              {
                opacity: 1,
                motionPath: { path, align: path, alignOrigin: [0.5, 0.5] },
                duration: 1,
                ease: "none",
              },
              0,
            )
            .from(
              q(".bridge-count"),
              { y: 45, rotate: -12, opacity: 0, duration: 0.55 },
              0.1,
            )
            .from(
              q(".bridge-link strong, .bridge-story"),
              { y: 28, opacity: 0, stagger: 0.12, duration: 0.5 },
              0.2,
            );
        });
        if (select(".project-directory a").length)
          gsap.from(select(".project-directory a"), {
            y: 24,
            opacity: 0,
            stagger: 0.1,
            duration: 0.7,
            scrollTrigger: {
              trigger: select(".project-intro")[0],
              start: "top 85%",
              once: true,
            },
          });
        if (select(".case-page").length) {
          gsap
            .timeline({ defaults: { ease: "power3.out" } })
            .fromTo(
              select(".case-curtain"),
              { scaleY: 1 },
              { scaleY: 0, duration: 0.85, transformOrigin: "top" },
              0,
            )
            .from(
              select(".case-heading"),
              { y: 36, opacity: 0.2, duration: 0.95 },
              0.15,
            )
            .from(
              select(".case-brand"),
              { rotate: -8, scale: 0.8, duration: 1 },
              0.15,
            );
        }
        // CSS hides nothing by default; refresh after fonts/images settle.
        let disposed = false;
        const refresh = () => {
          if (!disposed) ScrollTrigger.refresh();
        };
        document.fonts?.ready.then(refresh);
        const images = Array.from(root.querySelectorAll("img"));
        images.forEach((image) => image.addEventListener("load", refresh));
        return () => {
          disposed = true;
          delete root.dataset.cinematic;
          images.forEach((image) => image.removeEventListener("load", refresh));
        };
      },
      root,
    );
    return () => media.revert();
  }, [rootRef, reduced]);
  function toggleMotion() {
    setReduced((value) => {
      const next = !value;
      try {
        localStorage.setItem("kauan-motion", next ? "reduced" : "full");
      } catch {
        /* Preference is optional. */
      }
      return next;
    });
  }
  return { reduced, systemReduced, toggleMotion };
}
