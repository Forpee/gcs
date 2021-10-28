import { useContact } from "../store";
export default function Head() {
  const changeContactMode = useContact((state) => state.changeContactMode);
  const contactMode = useContact((state) => state.contactMode);
  return (
    <div className="2xl:flex justify-center mt-16 z-999 px-4 ">
      <div className="text-white w-100">
        <h1 className="md:text-3xl text-xl  font-semibold mb-4">
          PROVIDING SECURITY SOLUTIONS
        </h1>
        <h1 className="md:text-7xl text-3xl font-bold mb-4">PREDICTING </h1>
        <h1 className="md:text-7xl text-3xl font-bold">SECURITY THREATS</h1>
        <p className="text-gray-400 2xl:mt-20 w-3/4 leading-loose">
          Transform your Business with Confidence via a High Performance and
          Real-Time Cyber Risk Metric.{" "}
        </p>
        <p className="text-white  font-semibold">
          Forward Thinking at its Finest
        </p>
        <button
          onClick={() => {
            changeContactMode(!contactMode);
          }}
          className=" text-md mt-16 hover:bg-blue-100e hover:border-blue-400 hover:border text-white bg-blue-400 px-6 py-3 rounded-md"
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
