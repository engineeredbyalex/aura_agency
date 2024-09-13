"use client";
// import Logos
import Logo from "@/app/assets/Logo.svg";
import LogoMobile from "@/app/assets/Logo_Mobile.svg";
import Menu from "@/app/assets/Menu_Icon.svg";
// importing link
import Link from "next/link";
// importing useState and useEffect
import { useState, useEffect } from "react";
// importing gsap
import gsap from "gsap";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log(toggle);

    if (toggle === true) {
      gsap.to(".header", { backgroundColor: "#F33304" });
      gsap.to(".header", { height: "100vh", delay: 0.5 });
      gsap.to(".header_icon_mobile_icon", { fill: "#fff", delay: 0.75 });
      gsap.to(".header_menu_icon", { fill: "#fff", delay: 0.75 });
    } else {
      gsap.to(".header", { backgroundColor: "#fff",delay: 0.5  });
      gsap.to(".header", { height: "auto",});
      gsap.to(".header_icon_mobile_icon", { fill: "#F33304", delay: 0.75 });
      gsap.to(".header_menu_icon", { fill: "#F33304", delay: 0.75 });
    }
  }, [toggle]);

  return (
    <div className="header">
      <div className="header_icon_contianer">
        <Logo className="header_icon_desktop_icon" />
        <LogoMobile className="header_icon_mobile_icon" />
      </div>
      <div className="header_menu_container">
        <Menu onClick={() => setToggle(!toggle)} className="header_menu_icon" />
      </div>
      <div className="header_links_container">
        <div className="gap-4 flex flex-col items-start justify-start">
          <Link href={"/"}>
            <p>Home</p>
          </Link>
          <Link href={"/"}>
            <p>Projects</p>
          </Link>
          <Link href={"/"}>
            <p>About</p>
          </Link>
          <Link href={"/"}>
            <p>Contact</p>
          </Link>
        </div>
        <div className="gap-4 flex flex-col items-center justify-start">
          <Link href={"/"}>
            <p>auraagency@gmail.com</p>
          </Link>
          <Link href={"/"}>
            <p>+40 70 11 95 60</p>
          </Link>
        </div>
        <div className="gap-4 flex flex-col items-end justify-start">
          <Link href={"/"}>
            <p>Instagram</p>
          </Link>
          <Link href={"/"}>
            <p>LinkedIn</p>
          </Link>
          <Link href={"/"}>
            <p>Behance</p>
          </Link>
        </div>
      </div>
          
    </div>
  );
}
