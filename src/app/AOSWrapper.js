"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSWrapper({ children }) {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 600,
      easing: "ease-in-out",
      delay: 100,
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return <>{children}</>;
}
