import { useContact } from "../store";
import { Link } from "react-scroll";
export default function Footer() {
  const changeContactMode = useContact((state) => state.changeContactMode);
  const contactMode = useContact((state) => state.contactMode);
  var currentYear = new Date().getFullYear();
  return (
    <div className="relative pt-8 text-white px-4">
      {/* <div className="foot-video-outside relative">
        <video autoPlay loop muted className="foot-video">
          <source src="/footer.mp4" />
        </video>
        <div className="left-0 foot-overlay bg-blue-400"></div>
      </div> */}
      <div className="2xl:flex 2xl:mx-24 gap-24">
        <h1 className="md:text-6xl text-2xl uppercase text-center">
          Join us & explore your potential
        </h1>
        <div className="text-center my-4">
          <button
            onClick={() => {
              changeContactMode(!contactMode);
            }}
            className="bg-blue-100e hover:bg-blue-400 hover:text-white hover:border-white   z-10 border border-blue-400 text-blue-400 cursor-pointer px-8 py-2"
          >
            Contact us
          </button>
        </div>
      </div>
      <div className="2xl:flex justify-evenly mt-32 gap-16">
        <div>
          <img src="/logo.svg" className="sm:h-48 h-24 mx-auto" />
        </div>
        <div className="mx-auto text-center">
          <h1 className="text-gray-400 mb-4 ">GCS</h1>
          <ul>
            <li className="cursor-pointer hover:text-blue-400">
              <Link to="about" smooth={true}>
                {" "}
                About us
              </Link>
            </li>
            <li className="cursor-pointer hover:text-blue-400">
              {" "}
              <Link to="services" smooth={true}>
                {" "}
                Services
              </Link>
            </li>
            <li className="cursor-pointer hover:text-blue-400">
              {" "}
              <Link to="rr" smooth={true}>
                {" "}
                Residual Risk
              </Link>
            </li>
            <li
              className="cursor-pointer hover:text-blue-400"
              onClick={() => {
                changeContactMode(!contactMode);
              }}
            >
              Contact Us
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h1 className="text-gray-400 mb-4 mt-4">Important</h1>
          <div className="sm:w-64 px-4">
            <p className="text-sm text-center mx-auto text-gray-500">
              Glass Consulting Services is a consultancy and in addition to
              Glass Consulting Services operators, only approved, legally
              regulated, licensed and experienced experts are contracted where
              necessary.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-center text-gray-500 my-8 text-sm">
        Glass Consulting Services {currentYear}
      </h1>
    </div>
  );
}
