"use client";
// importing logo
import Logo from "@/app/assets/Logo_Mobile.svg";
import Header from "./components/layout/Header";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Home() {
  const [scrollY, setScrollY] = useState(0); // Track scroll position

  useEffect(() => {
    const handleScroll = () => {
      // Get the vertical scroll position
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
    const maxScroll = windowHeight; // Maximum distance the image will move (up to window height)

    // Calculate how far the image should move based on scroll position
    let translateY = Math.min(scrollY / maxScroll, 1) * 100; // Cap at 100% (image moves up until fully out of view)
    let scaleImage = 1 + Math.min(scrollY / maxScroll, 1) * 0.5; // Scale down the image by 50%

    // Apply the calculated transform using gsap
    gsap.to(".background_image_container", {
      y: `-${translateY}vh`,   // Move image up based on scroll
      scale: scaleImage,        // Scale image down
      ease: "power2.out",       // Add easing for smooth effect
      duration: 0.3,            // Smooth transition duration
    });
  }, [scrollY]);

  return (
    <div className="w-screen h-auto flex flex-col gap-16 ">
      <Header />
      <section className="px-5 lg:px-10 h-auto flex flex-col">
        <div className="gap-16 flex flex-col flex-grow">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold">We build brands that stand out.</h1>
            <div className="slider_container">
              <div className="flex gap-5 slider_content">
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
          </div>

          {/* Image Section */}
          <div className="px-5 lg:px-10 relative background_image_container overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://firebasestorage.googleapis.com/v0/b/aura-agency-32c86.appspot.com/o/iPhone_Mockup_1%201.png?alt=media&token=f5dbad1d-c728-44e0-a708-da475ea61184"
              alt="Mockup"
            />
          </div>
        </div>
      </section>
      <section className="h-screen w-screen bg-black">
        Test
      </section>
    </div>
  );
}
