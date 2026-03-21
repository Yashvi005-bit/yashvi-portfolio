import { useEffect, useRef } from "react";
import { useLoading } from "../../context/LoadingProvider";
import {
  handleMouseMove,
  handleTouchEnd,
  handleTouchMove,
} from "./utils/mouseUtils";
import { setAllTimeline } from "../utils/GsapScroll";
import { setProgress } from "../Loading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    // Drive the progress bar to 100% so the loading screen dismisses,
    // exactly as the original character.ts did after loadCharacter resolved.
    const progress = setProgress((value) => setLoading(value));
    progress.loaded();

    // ── GSAP scroll animations – exactly match originals from setCharTimeline ──

    if (window.innerWidth > 1024) {
      // tl1: landing → image starts at center, slides RIGHT so About Me is visible on the left
      gsap.timeline({
        scrollTrigger: {
          trigger: ".landing-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
        .fromTo(".character-model", { x: "0%" }, { x: "-25%", duration: 1 }, 0)
        .to(".landing-container", { opacity: 0, duration: 0.4 }, 0)
        .to(".landing-container", { y: "40%", duration: 0.8 }, 0);

      // tl2: about section → reveal What-I-Do expand boxes
      gsap.timeline({
        scrollTrigger: {
          trigger: ".about-section",
          start: "center 55%",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      }).fromTo(
        ".what-box-in",
        { display: "none" },
        { display: "flex", duration: 0.1, delay: 6 },
        0
      );

      // tl3: hide image as soon as WhatIDo section begins
      gsap.timeline({
        scrollTrigger: {
          trigger: ".whatIDO",
          start: "top bottom",
          end: "top top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
        .to(".character-model", { y: "-140%", opacity: 0, duration: 1, ease: "none" }, 0)
        .fromTo(".whatIDO", { y: 0 }, { y: "15%", duration: 1 }, 0);
    } else {
      // Mobile – reveal What-I-Do boxes when they enter the viewport
      gsap.timeline({
        scrollTrigger: {
          trigger: ".what-box-in",
          start: "top 70%",
          end: "bottom top",
        },
      }).to(".what-box-in", { display: "flex", duration: 0.1 }, 0);
    }

    // Career / site-wide timelines
    setAllTimeline();

    // ── Mouse / touch handlers (structure preserved, no head bone needed) ──────
    let mouse = { x: 0, y: 0 },
      interpolation = { x: 0.1, y: 0.2 };

    const onMouseMove = (event: MouseEvent) => {
      handleMouseMove(event, (x, y) => (mouse = { x, y }));
    };
    let debounce: number | undefined;
    const onTouchStart = (event: TouchEvent) => {
      const element = event.target as HTMLElement;
      debounce = setTimeout(() => {
        element?.addEventListener("touchmove", (e: TouchEvent) =>
          handleTouchMove(e, (x, y) => (mouse = { x, y }))
        );
      }, 200);
    };
    const onTouchEnd = () => {
      handleTouchEnd((x, y, interpolationX, interpolationY) => {
        mouse = { x, y };
        interpolation = { x: interpolationX, y: interpolationY };
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    const landingDiv = document.getElementById("landingDiv");
    if (landingDiv) {
      landingDiv.addEventListener("touchstart", onTouchStart);
      landingDiv.addEventListener("touchend", onTouchEnd);
    }

    return () => {
      clearTimeout(debounce);
      document.removeEventListener("mousemove", onMouseMove);
      if (landingDiv) {
        landingDiv.removeEventListener("touchstart", onTouchStart);
        landingDiv.removeEventListener("touchend", onTouchEnd);
      }
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <div className="character-container">
        {/* character-model keeps its class so all GSAP animations still target it */}
        <div className="character-model" ref={canvasDiv}>
          <div className="character-rim"></div>
          {/* Circular photo replaces the Three.js canvas */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid rgba(94, 234, 212, 0.4)",
                boxShadow:
                  "0 0 40px rgba(34, 211, 238, 0.3), 0 0 80px rgba(34, 211, 238, 0.15)",
                position: "relative",
                zIndex: 2,
              }}
            >
              <img
                src="/images/yashvi.jpeg"
                alt="Yashvi Shrest"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </div>
          <div className="character-hover" ref={hoverDivRef}></div>
        </div>
      </div>
    </>
  );
};

export default Scene;
