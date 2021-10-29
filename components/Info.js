import { gsap } from "gsap/dist/gsap";
import { useEffect } from "react";
export default function Info() {
  useEffect(() => {
    gsap.to(".testImg", {
      scale: 1.3,
      duration: 1.5,
      repeat: -1,
      ease: "linear",
      yoyo: true,
    });
  }, []);
  return (
    <div className="text-center text-white  mt-48 z-999 relative ok px-5">
      <div className="">
        <h1 className="md:text-3xl text-xl mb-4 ">
          Risk mitigation measures are advised in terms of
        </h1>
        <h1 className="md:text-7xl text-3xl font-semibold md:w-3/5 mx-auto leading-normal  ">
          what risk is accepted, what risk is managed, what risk is provided for
          by yourself
        </h1>
      </div>
      <div className="relative md:w-1/2 text-xs md:text-base 2xl:mx-auto mt-32 h-100">
      
        <div className="absolute  top-0 left-0 flex  items-center">
          <img className="h-8 mx-4 testImg" src="/purp.svg" />
          <h1>Background Checks</h1>
        </div>
        <div className="absolute top-24 right-0 flex items-center ">
          <img className="h-8 mx-4 testImg" src="/blue.svg" />
          <h1>Company Flush</h1>
        </div>

        <div className="absolute top-52 left-10 xs:left-56 flex items-center">
          <img className="h-8 mx-4 testImg" src="/green.svg" />
          <h1>Surveys</h1>
        </div>
        <div className="absolute top-96 left-8 flex items-center">
          <img className="h-8 mx-4 testImg" src="/purp.svg" />
          <h1>Loss Reductions</h1>
        </div>

        <div className="absolute top-100 left-12 xs:left-40 flex items-center">
          <img className="h-8 mx-4 testImg" src="/blue.svg" />

          <h1>Investigations</h1>
        </div>
        <div className="absolute top-80 right-28 flex items ">
          <img className="h-8 mx-4 testImg" src="/green.svg" />

          <h1>Covert Agents</h1>
        </div>

        <div className="absolute top-101 xs:left-48 flex items-center">
          <img className="h-8 mx-4 testImg" src="/purp.svg" />

          <h1>Insurance</h1>
        </div>
      </div>
    </div>
  );
}
