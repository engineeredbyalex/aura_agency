"use client";
// importing useEffect, useRef, useState
import { useEffect, useState } from "react";
//importing AnimatedSlider
import AnimatedSlider from "../ui/AnimatedSlider";
// importing gsap
import gsap from "gsap";

export default function LandingSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      console.log("ScrollY:", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const windowHeight = window.innerHeight;
    const maxScroll = windowHeight;

    let translateY = Math.min(scrollY / maxScroll, 1) * 100;
    let scaleImage = 1 + Math.min(scrollY / maxScroll, 1) * 0.5;

    gsap.to(".background_image_container", {
      y: `-${translateY}vh`,
      // scale: scaleImage,
      ease: "power2.out",
      duration: 0.3,
    });
  }, [scrollY]);

  return (
    <div>
      <section className="px-5 lg:px-20 py-10 h-auto flex flex-col ">
        <div className="w-full h-auto flex flex-col gap-2 lg:gap-5 ">
          <h1 className="font-bold">We build brands that stand out.</h1>
          <AnimatedSlider />
        </div>
      </section>
      <section className="px-5 lg:px-20 h-screen  lg:h-auto background_image_container">
        <img
          className="w-full h-full object-cover object-top"
          src="https://firebasestorage.googleapis.com/v0/b/aura-agency-32c86.appspot.com/o/Macbook_Air_M2_Mockup_2.png?alt=media&token=9f7786ca-16a0-4f4f-a015-1dd25f3f818b"
          alt="Mockup"
        />
      </section>
    </div>
  );
}
