import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.to("#title-service-1", {
        xPercent: 20,
        scrollTrigger: {
          trigger: "#title-service-1",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("#title-service-2", {
        xPercent: -30,
        scrollTrigger: {
          trigger: "#title-service-2",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("#title-service-3", {
        xPercent: 100,
        scrollTrigger: {
          trigger: "#title-service-3",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("#title-service-4", {
        xPercent: -100,
        scrollTrigger: {
          trigger: "#title-service-4",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive"
    >
      <div id="title-service-1">
        <p>Mern Stack Development</p>
      </div>

      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3 translate-x-16"
      >
        <p className="font-normal">Development</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>Deployment</p>
      </div>

      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3 -translate-x-48"
      >
        <p>APIs</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p className="italic">Frontends</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>Scalability</p>
      </div>

      <div id="title-service-4" className="translate-x-48">
        <p>Databases</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
