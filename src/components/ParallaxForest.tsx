"use client";

import { useEffect, useRef } from "react";

/** Subtle multi-layer forest parallax driven by scroll. */
export function ParallaxForest() {
  const backRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (backRef.current) backRef.current.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
        if (midRef.current) midRef.current.style.transform = `translate3d(0, ${y * 0.22}px, 0)`;
        if (frontRef.current) frontRef.current.style.transform = `translate3d(0, ${y * 0.38}px, 0)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        ref={backRef}
        className="absolute inset-0 will-change-transform bg-[radial-gradient(ellipse_at_20%_18%,rgba(90,150,110,0.30),transparent_46%),radial-gradient(ellipse_at_82%_8%,rgba(212,164,90,0.16),transparent_42%),linear-gradient(180deg,#0c1411_0%,#101c16_45%,#0a100d_100%)]"
      />
      <div className="film-grain absolute inset-0 opacity-[0.07]" />
      <div ref={midRef} className="fireflies absolute inset-0 will-change-transform">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className={`firefly firefly-${i + 1}`} />
        ))}
      </div>
      <div ref={frontRef} className="absolute inset-x-0 bottom-[-8%] h-[64%] w-full will-change-transform">
        <svg
          className="h-full w-full text-[#0a120e]"
          viewBox="0 0 1440 520"
          preserveAspectRatio="xMidYMax slice"
          fill="currentColor"
        >
          <path d="M0 320 C180 250 280 390 460 330 C620 280 700 180 860 220 C1040 270 1120 360 1280 300 C1360 270 1400 250 1440 260 L1440 520 L0 520 Z" />
          <path
            className="opacity-80"
            d="M0 380 C220 320 340 420 520 360 C700 300 820 240 980 290 C1140 340 1240 390 1440 340 L1440 520 L0 520 Z"
          />
          <g className="opacity-70" stroke="rgba(232,239,230,0.08)" strokeWidth="1" fill="none">
            <path d="M180 420 L180 260" />
            <path d="M160 290 Q180 250 200 290" />
            <path d="M420 450 L420 210" />
            <path d="M390 250 Q420 190 450 250" />
            <path d="M760 460 L760 240" />
            <path d="M730 280 Q760 210 790 280" />
            <path d="M1080 470 L1080 250" />
            <path d="M1050 290 Q1080 220 1110 290" />
            <path d="M1280 455 L1280 280" />
            <path d="M1255 310 Q1280 250 1305 310" />
          </g>
        </svg>
      </div>
      <div className="hero-glow absolute left-1/2 top-[18%] h-40 w-40 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,164,90,0.35),transparent_70%)] blur-2xl" />
    </div>
  );
}
