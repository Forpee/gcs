import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
export default function Enlarge() {
  useEffect(() => {
    gsap.set(".mask", { autoAlpha: 0, visibility: "hidden" });
    gsap.set(".enlargeText", { scale: 80, y: "-1200%" });
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".title-container",
        start: "top +50%",
        end: "50% top",
        scrub: 1,
        markers: true,
        pin: true,
      },
    });
    gsap.set(".mask", {
      scrollTrigger: {
        trigger: ".mt-screen",
        start: "top +50%",
        end: "top +50%",
      },
      autoAlpha: 1,
      opacity: 1,
    });
    tl.to(".enlargeText", {
      scale: 1,
      y: 0,
      x: 0,
    });
  }, []);
  return (
    <div className="bg-white h-screen mt-screen">
      <div className="h-screen justify-center items-center flex mask bg-white title-container">
        <h1 className=" text-8xl font-bold enlargeText text-blue-100e">A</h1>
      </div>
    </div>
  );
}