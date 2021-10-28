import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
export default function Third() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".white-third",
      start: "top top",
      end: "bottom 150px",
      pin: ".white-content",
    });
  });
  return (
    <div id='rr'>
      <div className="h-screen white-third   bg-white text-8xl text-blue-100e font-bold flex justify-center items-center px-4 ">
        <p className="white-content relative text-center">Residual Risk</p>
      </div>
      <div className="h-screen blue-third bg-blue-100e relative pt-32  text-white text-center z-999">
        <h1 className="text-7xl font-bold">5 Vector Approach</h1>
        <h1 className="text-7xl mb-24">To Measure Risk</h1>
        <div className="flex 2xl:gap-24 gap-12 justify-center  mb-24 ">
          <div>
            <p className="font-semibold text-4xl">1</p>
          </div>
          <div>
            <p className="font-semibold text-4xl">2</p>
          </div>
          <div>
            <p className="font-semibold text-4xl">3</p>
          </div>
          <div>
            <p className="font-semibold text-4xl">4</p>
          </div>
          <div>
            <p className="font-semibold text-4xl">5</p>
          </div>
        </div>
        <p className="w-screen/2 text-lg text-center mx-auto ">
          You assess the current state of the risk. In your evaluation, the
          current or inherent risk likelihood is 3 (medium) on a scale of 1-5
          where 1 is the lowest and 5 the highest. The consequence if such an
          event was to occur, in your evaluation, would be 4 (high) on a similar
          scale of 1-5. So,
        </p>
        <ul className='mt-8'>
          <li></li>
          <li>Inherent risk likelihood = 3 (medium)</li>
          <li>Inherent risk consequence = 4 (high)</li>
        </ul>
      </div>
    </div>
  );
}
