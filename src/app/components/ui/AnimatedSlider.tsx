"use client";
// importing logo
import Logo from "@/app/assets/Logo_Mobile.svg";
// importing useEffect, useRef, useState
import { useEffect, useRef } from "react";

export default function AnimatedSlider() {
    const sliderRef = useRef<HTMLDivElement>(null);
  
    // Infinite slider animation
    useEffect(() => {
      const slider = sliderRef.current;
  
      if (!slider) return;
  
      const clone = slider.innerHTML;
      slider.innerHTML += clone + clone;
  
      let scrollSpeed = 1;
      let scrollPosition = 0;
  
      const animateSlider = () => {
        scrollPosition -= scrollSpeed;
  
        if (Math.abs(scrollPosition) >= slider.scrollWidth / 2) {
          scrollPosition = 0;
        }
        slider.style.transform = `translateX(${scrollPosition}px)`;
  
        requestAnimationFrame(animateSlider);
      };
      requestAnimationFrame(animateSlider);
    }, []);
    return(
        <div className="slider_container ">
        <div
          ref={sliderRef}
          className="flex gap-5 slider_content "
        >
          <div className="flex flex-row items-center justify-center gap-3">
            <p className="text-[#959595]">transparency</p>
            <Logo className="slider_icon" />
          </div>
          <div className="flex flex-row items-center justify-center gap-3">
            <p className="text-[#959595]">creativity</p>
            <Logo className="slider_icon" />
          </div>
          <div className="flex flex-row items-center justify-center gap-3">
            <p className="text-[#959595]">innovation</p>
            <Logo className="slider_icon" />
          </div>
          {/* Cloning starts here */}
          <div className="flex flex-row items-center justify-center gap-3">
            <p className="text-[#959595]">transparency</p>
            <Logo className="slider_icon" />
          </div>
          <div className="flex flex-row items-center justify-center gap-3">
            <p className="text-[#959595]">creativity</p>
            <Logo className="slider_icon" />
          </div>
          <div className="flex flex-row items-center justify-center gap-3">
            <p className="text-[#959595]">innovation</p>
            <Logo className="slider_icon" />
          </div>
        </div>
      </div>
    )
}