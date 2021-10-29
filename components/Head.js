import { useContact } from "../store";
export default function Head() {
  const changeContactMode = useContact((state) => state.changeContactMode);
  const contactMode = useContact((state) => state.contactMode);
  return (
    <div className="2xl:flex justify-center w-screen mt-16 z-999 px-4  ">
      <div className="text-white w-screen md:w-100">
        <h1 className="md:text-3xl xs:text-xl  text-xs font-semibold mb-4">
          PROVIDING SECURITY SOLUTIONS
        </h1>
        <h1 className="md:text-7xl xs:text-3xl text-lg font-bold mb-4">PREDICTING </h1>
        <h1 className="md:text-7xl xs:text-3xl text-lg font-bold">SECURITY THREATS</h1>
        <p className="text-gray-400 md:mt-20 text-xs  w-3/4 leading-loose">
          Transform your Business with Confidence via a High Performance and
          Real-Time Cyber Risk Metric.{" "}
        </p>
        <p className="text-white md:text-base text-xs  font-semibold">
          Forward Thinking at its Finest
        </p>
        <button
          onClick={() => {
            changeContactMode(!contactMode);
          }}
          className=" md:text-base text-xs md:mt-16 mt-8 hover:bg-blue-100e hover:border-blue-400 hover:border text-white bg-blue-400 px-6 py-3 rounded-md"
        >
          Get in Touch With Us
        </button>
      </div>

      <div className="video-outside relative">
        <video autoPlay loop muted className=" head-video  ">
          <source src="/2.mp4" />
        </video>
        <div className="head-overlay  absolute top-0 right-0 bg-blue-400"></div>
      </div>
    </div>
  );
}
