/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { useContact } from "../store";
import { Dialog, Transition } from "@headlessui/react";
import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";

export default function Modal() {
  const contactMode = useContact((state) => state.contactMode);
  const changeContactMode = useContact((state) => state.changeContactMode);
  const [open, setOpen] = useState(contactMode);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={contactMode} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-1000  inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={changeContactMode}
      >
        <div className="flex items-end justify-center min-h-screen relative z-1000  pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Get in Touch
                    </Dialog.Title>
                    <div className="mt-2">
                      <div className=" flex align-items">
                        <PhoneIcon className="w-4 mr-2" />
                        <p className="text-sm text-gray-500">
                          Craig 0826608618
                        </p>
                      </div>
                      <div className=" flex my-2 align-items">
                        <MailIcon className="w-4 mr-2" />
                        <p className="text-sm text-gray-500">info@GCS.co.za</p>
                      </div>
                      <div className=" flex align-items">
                        <LocationMarkerIcon className="w-4 mr-2" />
                        <p className="text-sm text-gray-500">
                          11 Pongola Street Brackendowns.
                        </p>
                      </div>

                      <div className="flex-col">
                        <div>
                          <input className="border-b my-1" />
                        </div>
                        <div>
                          <input className="border-b my-1" />
                        </div>
                        <div>
                          <input className="border-b my-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-100e text-base font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => changeContactMode(!contactMode)}
                >
                  Send Message
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => changeContactMode(!contactMode)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
