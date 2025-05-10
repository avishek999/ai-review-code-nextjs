"use client";

/** core libraries & installed libraries */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
/** Icons */
import { IconType } from "react-icons";

/** Interfaces */
interface Icards {
  title: string;
  description: string;
  Icon: IconType;
}

const Card1: React.FC<Icards> = ({ title, description, Icon }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        translateX: 100,
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={containerRef}
      className="space-y-3  h-full bg-[var(--secondary-background-color)] rounded-xl p-6 md:w-[30%] xl:w-[27%] md:mx-0 mx-3"
    >
      <div className="p-3 bg-[var(--accent-color2)] text-[var(--icon-color)] w-fit rounded">
        <Icon size={24} />
      </div>
      <h2 className="font-bold text-[20px]">{title}</h2>
      <p className="text-[var(--secondary-text-color)] w-[80%] text-[15px]">
        {description}
      </p>
    </div>
  );
};

export default Card1;
