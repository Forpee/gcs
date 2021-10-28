export default function MoreInfo() {
  return (
    <div id='about' className="bg-white ">
      <div className=" bg-white text-center flex justify-center">
        <div className="w-screen/2 px-4">
          <h1 className="mx-auto 2xl:text-7xl text-3xl font-bold mb-16  text-blue-100e">
            Risk Assessment Framework for Enterprises
          </h1>
          <p className="text-lg ">
            Glass Consulting Services is a sole propriety owned and managed by
            Craig Glass who has over 30 years experience in business and private
            incident investigation, security management, cost containment and
            risk mitigation. Some successful projects worked on in the past and
            previous employment undertakings include:
          </p>
        </div>
      </div>
      <div className="text-white bg-blue-100e 2xl:text-2xl text-center py-48 my-32">
        <p className="w-screen/2 mx-auto px-4">
          Glass Consulting Services is a consultancy and in addition to Glass
          Consulting Services operators, only approved, legally regulated,
          licensed and experienced experts are contracted where necessary.
          Quotes are free and no work is embarked upon unless scope and costs
          are agreed to up front. Indemnities and/or non-disclosure and
          confidentiality agreements are applied where required. All work is
          contractual to protect both the service provider and the client. All
          travel costs are calculated from Brackendowns in Alberton,
          Johannesburg.
        </p>
      </div>
      <div className="mt-64">
        <h1 className="mx-auto mb-16 text-center text-blue-100e 2xl:text-5xl text-3xl font-semibold w-screen3/5">
          Definition of Residual Risk
        </h1>
        <div className="2xl:flex justify-evenly mx-auto 2xl:gap-8 w-screen3/5">
          <div className="2xl:w-96 text-lg text-blue-100e px-4">
            <p>
              Residual risk is the modified risk after internal controls have
              been implemented and monitored and the effect of their findings
              considered.Having defined residual risk, let's take a look at what
              we have before we modify it. I like to call this the evaluation
              risk, because it is the level of risk following evaluation by
              someone suitably qualified for such a task. That someone might be
              a professional risk manager, chief compliance officer or even an
              executive manager.
            </p>
          </div>
          <div className="2xl:w-96 2xl:mt-0 mt-8 text-lg text-blue-100e px-4">
            <p>
              The method and degree of complexity involved in that evaluation
              does not change the significance of evaluation (or inherent) risk.
              What is important is that the risk is identified and assessed
              responsibly and to the satisfaction of management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
