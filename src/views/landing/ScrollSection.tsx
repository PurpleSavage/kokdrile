"use client";
import style from "@/views/css/scroll_section.module.css";
import { textDataSvg } from "@/assets/logo/textDataSvg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

function ScrollSection() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const initialOverlayScale = 350;

    const heroImgContainer = document.getElementById(
      "hero_img_container"
    ) as HTMLElement | null;
    const heroImgLogo = document.getElementById(
      "hero_img_logo"
    ) as HTMLElement | null;
    const heroImgCopy = document.getElementById(
      "hero_img_copy"
    ) as HTMLElement | null;
    const fadeOverlay = document.getElementById(
      "fade_overlay"
    ) as HTMLElement | null;
    const overlay = document.getElementById("overlay") as HTMLElement | null;
    const overlay_copy = document.getElementById(
      "overlay_copy"
    ) as HTMLElement | null;
    const h1Text = document.getElementById("h1Text") as HTMLElement | null;
    const logoContainer = document.getElementById(
      "logo_container"
    ) as HTMLElement | null;
    const logoMask = document.getElementById(
      "logoMask"
    ) as SVGPathElement | null;

    // Verificación de existencia
    if (
      !heroImgContainer ||
      !heroImgLogo ||
      !heroImgCopy ||
      !fadeOverlay ||
      !overlay ||
      !overlay_copy ||
      !h1Text ||
      !logoContainer ||
      !logoMask
    ) {
      console.warn(
        "Uno o más elementos requeridos no se encontraron en el DOM."
      );
      return;
    }

    logoMask.setAttribute("d", textDataSvg);

    const logoDimensions = logoContainer.getBoundingClientRect();
    const logoBoundingBox = logoMask.getBBox();

    const horizontalScaleRatio = logoDimensions.width / logoBoundingBox.width;
    const verticalScaleRatio = logoDimensions.height / logoBoundingBox.height;

    const logoScaleFactor = Math.min(horizontalScaleRatio, verticalScaleRatio);

    const logoHorizontalPosition =
      logoDimensions.left +
      (logoDimensions.width - logoBoundingBox.width * logoScaleFactor);

    const logoVerticalPosition =
      logoDimensions.top +
      (logoDimensions.height - logoBoundingBox.height * logoScaleFactor) / 2 -
      logoBoundingBox.y * logoScaleFactor;

    logoMask.setAttribute(
      "transform",
      `translate(${logoHorizontalPosition}, ${logoVerticalPosition}) scale(${logoScaleFactor})`
    );

    ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      end: `${window.innerHeight * 5}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const scrollProgress = self.progress;
        const fadeOpacity = 1 - scrollProgress * (1 / 0.15);

        if (scrollProgress <= 0.15) {
          gsap.set([heroImgLogo, heroImgCopy], {
            opacity: fadeOpacity,
          });
        } else {
          gsap.set([heroImgLogo, heroImgCopy], {
            opacity: 0,
          });
        }

        if (scrollProgress <= 0.85) {
          const normalizedProgress = scrollProgress * (1 / 0.85);
          const heroImgContainerScale = 1.5 - 0.5 * normalizedProgress;
          const overlayScale =
            initialOverlayScale *
            Math.pow(1 / initialOverlayScale, normalizedProgress);

          let fadeOverlayOpacity = 0;

          gsap.set(heroImgContainer, {
            scale: heroImgContainerScale,
          });

          gsap.set(overlay, {
            scale: overlayScale,
          });

          if (scrollProgress >= 0.25) {
            fadeOverlayOpacity = Math.min(
              1,
              (scrollProgress - 0.25) * (1 / 0.4)
            );
          }

          gsap.set(fadeOverlay, {
            opacity: fadeOverlayOpacity,
          });
        }

        if (scrollProgress >= 0.6 && scrollProgress <= 0.85) {
          const overlayCopyRevealProgress = (scrollProgress - 0.6) * (1 / 0.25);

          const gradientSpread = 100;
          const gradientBottomPosition = 240 - overlayCopyRevealProgress * 280;
          const gradientTopPosition = gradientBottomPosition - gradientSpread;
          const overlayCopyScale = 1.25 - 0.25 * overlayCopyRevealProgress;

          overlay_copy.style.background = `linear-gradient(to bottom, #111117 0%, #111117 ${gradientTopPosition}%, #e66461 ${gradientBottomPosition}%, #e66461 100%)`;
          overlay_copy.style.backgroundClip = "text";

          gsap.set(overlay_copy, {
            scale: overlayCopyScale,
            opacity: overlayCopyRevealProgress,
          });
        } else if (scrollProgress < 0.6) {
          gsap.set(overlay_copy, {
            opacity: 0,
          });
        }
      },
    });
  }, []);
  return (
    <section className={`text-white overflow-x-hidden bg-black`}>
      <section id="hero" className={`${style.hero}`}>
        <div id="hero_img_container" className={`${style.hero_img_container}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/gta_hero_bg.webp" alt="gta vi" />

          <div id="hero_img_logo" className={`${style.hero_img_logo}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.webp" alt="logo web" />
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/gta_hero_no_bg.webp" alt="gta vi no bg" />

          <div id="hero_img_copy" className={`${style.hero_img_copy}`}>
            <p>Scroll down to reveal</p>
          </div>
        </div>

        <div id="fade_overlay" className={`${style.fade_overlay}`}></div>

        <div id="overlay" className={`${style.overlay}`}>
          <svg width="100%" height="100%">
            <defs>
              <mask id="logoRevealMask">
                <rect width="100%" height="100%" fill="white" />
                <path id="logoMask"></path>
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="#000000"
              mask="url(#logoRevealMask)"
            />
          </svg>
        </div>

        <div id="logo_container" className={`${style.logo_container}`}></div>

        <div id="overlay_copy" className={`${style.overlay_copy}`}>
          <h1 id="h1Text">
            Transforma <br />
            Tus <br />
            Campañas
          </h1>
        </div>
      </section>
    </section>
  );
}
export default ScrollSection;
