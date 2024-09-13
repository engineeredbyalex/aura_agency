"use client";
// importing useEffect, useState
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
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const maxScroll = windowHeight;

    // Factor to slow down the scroll speed
    const scrollSpeedFactor = 3; // The larger this number, the slower the scroll effect
    const translateY = Math.min(scrollY / (maxScroll * scrollSpeedFactor), 1) * 100;

    gsap.to(".background_image_container", {
      y: `-${translateY}vh`,
      ease: "power2.out",
      duration: 0.3,
    });
  }, [scrollY]);

  return (
    <div>
      <section className="px-5 lg:px-20 py-10 h-auto flex flex-col">
        <div className="w-full h-auto flex flex-col gap-2 lg:gap-5">
          <h1 className="font-bold">We build brands that stand out.</h1>
          <AnimatedSlider />
        </div>
      </section>
      <section className="px-5 lg:px-20 lg:h-screen h-[200vh] background_image_container">
        <img
          className="w-full h-full object-cover object-top"
          src="https://firebasestorage.googleapis.com/v0/b/aura-agency-32c86.appspot.com/o/Macbook_Air_M2_Mockup_2.png?alt=media&token=9f7786ca-16a0-4f4f-a015-1dd25f3f818b"
          alt="Mockup"
        />
      </section>
    </div>
  );
}
