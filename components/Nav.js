import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useContact } from "../store";
import { Link } from "react-scroll";
export default function Nav() {
  const changeContactMode = useContact((state) => state.changeContactMode);
  const contactMode = useContact((state) => state.contactMode);

  return (
    <Disclosure>
      {({ open }) => (
        <div>
          <div className="h-48 flex  py-8 px-16  text-white w-screen justify-between sm:justify-evenly items-center">
            <div className="  flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <img src="/logo.svg" className="h-16" />
            <div className="sm:flex hidden   justify-center items-center text-sm nav-links">
              <a className="px-6">
                <h1>
                  <Link to="about" smooth={true}>
                    {" "}
                    About us
                  </Link>
                </h1>
              </a>
              <a className="px-6">
                <Link to="services" smooth={true}>
                  {" "}
                  Services
                </Link>
              </a>
              <a className="px-6">
                <Link to="rr" smooth={true}>
                  {" "}
                  Residual Risk
                </Link>
              </a>

              <a
                onClick={() => {
                  changeContactMode(!contactMode);
                }}
                className="px-6 cursor-pointer"
              >
                <h1>Contact Us</h1>
              </a>
            </div>
            <div>
              {" "}
              <button
                onClick={() => {
                  changeContactMode(!contactMode);
                }}
                className="border lg:block hidden text-sm hover:bg-blue-400 hover:text-white hover:border-white border-blue-400 text-white px-6 py-3 rounded-md"
              >
                Get in Touch With Us
              </button>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 flex-col ">
              <Disclosure.Button
                as="a"
                className="text-white  hover:text-blue-400"
              >
                <div>
                  <Link to="about" smooth={true}>
                    {" "}
                    About us
                  </Link>
                </div>
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                className="text-white  hover:text-blue-400"
              >
                <Link to="services" smooth={true}>
                  {" "}
                  Services
                </Link>
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                className="text-white  hover:text-blue-400"
              >
                <div>
                  <Link to="rr" smooth={true}>
                    {" "}
                    Residual Risk
                  </Link>
                </div>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About Us", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// export default function Nav() {

//   return (
//     <Disclosure as="nav" className="">
//       {({ open }) => (
//         <>
//           <div className="  mx-auto mt-8 px-2 sm:px-6 lg:px-8">
//             <div className="relative flex items-center  justify-evenly h-16">

//               <div className="flex-1 flex items-center justify-evenly sm:items-stretch sm:justify-start">
//                 <div className="hidden sm:block sm:ml-6">
//                   <div className="flex space-x-4 justify-center">
//                     {navigation.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className={classNames(
//                           item.current
//                             ? "bg-blue-100e text-white"
//                             : "text-white hover:bg-blue-400 hover:text-white",
//                           "px-3 py-2 rounded-md text-sm font-medium"
//                         )}
//                         aria-current={item.current ? "page" : undefined}
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="flex-shrink-0 flex items-center">
//                 <img
//                   className="block self-center lg:hidden h-8 w-auto"
//                   src="/logo.svg"
//                   alt="Workflow"
//                 />
//                 <img
//                   className="hidden lg:block h-8 w-auto"
//                   src="/logo.svg"
//                   alt="Workflow"
//                 />
//               </div>
//               <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

//               </div>
//             </div>
//           </div>

//         </>
//       )}
//     </Disclosure>
//   );
// }
