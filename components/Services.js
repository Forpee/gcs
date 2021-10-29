export default function Services() {
  return (
    <div id='services' className="bg-blue-100e  text-white relative">
      <div className="absolute -translate-x-1/2 transform left-1/2  h-full">
        <img className="h-full " src="/line.svg" />
      </div>
      <div className="md:w-screen/2 md:px-8 px-4 mx-auto grid flex-col justify-items-stretch">
        <div className="mb-32 justify-self-start">
          <h1 className="text-blue-400 md:text-3xl"> Physical Surveys: </h1>
          <p className="md:w-96 md:text-3xl  text-left mx-auto ">
            Premises assessed and weaknesses and opportunities identified.
          </p>
        </div>
        <div className="my-32 justify-self-end">
          <p className="md:w-96 md:text-3xl text-left mx-auto ">
            <span className="text-blue-400 md:text-3xl ">
              Loss Reduction and Mitigation plan:
            </span>{" "}
            {` `}
            what risk is accepted, what risk is managed, what risk is provided
            for by yourself and what risk is transferred
          </p>
        </div>
        <div className="my-32 justify-self-start">
          <p className="md:w-96 md:text-3xl  text-left mx-auto ">
            <span className="text-blue-400 md:text-3xl ">Company Flush: </span>a
            thorough check on your company at the level of detail required by
            the client.
          </p>
        </div>
        <div className="my-32 justify-self-end">
          <p className="md:w-96 md:text-3xl text-left mx-auto ">
            <span className="text-blue-400 md:text-3xl ">Investigations: </span>
            Experienced personnel will investigate any incident and compile a
            comprehensive report or docket upon which practical recommended
            actions can be taken
          </p>
        </div>
        <div className="my-32 justify-self-start">
          <p className="md:w-96 md:text-3xl  text-left mx-auto ">
            <span className="text-blue-400 md:text-3xl ">
              {" "}
              Intelligence gathering: {` `}
            </span>
            Intelligence and evidence are gathered through a historically
            successful program of covert agent deployment and management.
          </p>
        </div>
      </div>
    </div>
  );
}
