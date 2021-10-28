import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
export default function How() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.set(".bg-abs-black", { height: 0 });
    gsap.to(".bg-abs-black", {
      height: "100%",
      scrollTrigger: {
        trigger: ".white-trig",
        start: "top top", //(top bottom )top of container hits bottom  of screen
        end: "+100% top",
        pin: true,
        scrub: true,
      },
    });
  }, []);
  return (
    <div className="bg-blue-100e">
      <div className="relative h-screen white-trig">
        <div className="bg-white h-screen flex items-center justify-center">
          <div className="absolute left-0 bg-black bottom-0 right-0 h-full bg-abs-black"></div>
          <div>
            <h1 className="text-8xl mix-blend-difference text-center text-white font-bold m-auto">
             What do we do? 
            </h1>
          </div>
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue-100e mix-blend-screen h-full z-10"></div>
        </div>
      </div>
   
    </div>
  );
}
