import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
export default function Enlarge() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.set(".test-text", { autoAlpha: 0, scale: 40, y: "-850%" }); //

    gsap.to(".test-text", {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: ".ok",
        start: "top top",
        end: "top top",
        scrub: true,
      },
    });
    gsap.to(".test-text", {
      scale: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".test-trig",

        start: "-50% top",
        end: "+50% top",
        scrub: true,
      },
    });
    ScrollTrigger.create({
      trigger: ".test-trig",
      start: "top top",
      end: "+50% top",
      scrub: true,
      pin: true,
    });
  }, []);
  return (
    <div className="bg-white h-screen  items-center test-trig flex z-bad  ">
      <div className="text-xxl text-right  text-small-enlarge font-bold test-text test-flex text-blue-100e  ">
        GL
      </div>
      <div className="m-auto">
        <h1 className="text-xxl text-small-enlarge   font-bold test-text flex text-blue-100e text-center ">
          A
        </h1>
      </div>
      <div className="text-xxl text-small-enlarge  font-bold test-text text-blue-100e test-flex ">
        SS
      </div>
    </div>
  );
}
