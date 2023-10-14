import { HeroTop, Layout } from "../components";

const About = () => {
  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900">
        <HeroTop image="images/about.jpg" text="About Us" />
        <div className="py-16 px-4 mx-auto max-w-screen-lg text-start lg:py-24">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-200 text-center mb-10 md:mb-14">
            About Cayman Ghana Ltd.
          </h2>

          <p className="mb-5 text-gray-500 dark:text-gray-400">
            Cayman Ghana Limited is a multi-dimensional firm, a private limited
            liability company incorporated in Ghana under the Companies code,
            1663 (Act 179) in the year 2012 with the principal office location
            at 2nd Labone Link in Labone, Accra- Ghana. The company’s aim is to
            provide exceptional, outstanding and innovative services to
            prospective clients in areas of Human Resource Management and
            corporate Secretarial services.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            At Cayman Ghana Limited, we work closely with our valued customers
            to increase their readiness level to Human Resources Management
            systems. This includes training, methodology development, tools
            implementation, assessment, and other services
          </p>

          {/*  */}
          <div className="mt-10 pb-5 rounded-b-lg flex items-center flex-col gap-10 lg:flex-row">
            <div className="w-full lg:w-1/2 mt-3">
              <img src="/images/about.svg" alt="" className="" />

              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-200 text-center lg:text-start mt-16 md:mt-20 mb-5">
                Our Objectives.
              </h2>

              <p className="mb-5 text-gray-500 dark:text-gray-400 lg:w-2/3">
                To provide diversity in Human Resource Consulting services by
                facilitating identified, necessary change within an organization
                in order to enhance the success of the company through the
                improvement in Productivity, Efficiency, Communication, and
                Employee ethics.
              </p>
              <p className="mb-5 text-gray-500 dark:text-gray-400 lg:w-2/3">
                No matter your industry, Cayman Ghana Limited will work with
                your company to identify needs, develop an action plan, and
                assist with implementation. Thus we add and retain values to our
                clients through our excellent team.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full">
                <h2 className="text-2xl md:text-4xl font-bold text-[#dacb46] text-center lg:text-start mt-10 md:mt-20 mb-5">
                  Our Mission.
                </h2>

                <p className="mb-5 text-gray-500 dark:text-gray-400 lg:w-1/2 text-center lg:text-start">
                  To provide a needed service in the area of Human Resource
                  Management at an affordable cost without compromising on
                  quality.
                </p>

                <h2 className="text-2xl md:text-4xl font-bold text-[#dacb46] text-center lg:text-start mt-10 md:mt-20 mb-5">
                  Our Vission.
                </h2>

                <p className="mb-5 text-gray-500 dark:text-gray-400 lg:w-1/2 text-center lg:text-start">
                  To become a leading support and service provider in the Human
                  Resource Consulting industry, to individuals and corporate
                  institutions.
                </p>

                <h2 className="text-2xl md:text-4xl font-bold text-[#dacb46] text-center lg:text-start mt-10 md:mt-20 mb-5">
                  Our Core Values.
                </h2>

                <p className="mb-5 text-gray-500 dark:text-gray-400 lg:w-1/2 text-center lg:text-start">
                  Our core values of customer satisfaction, continuous
                  improvement, teamwork, and achieving results are woven into
                  every aspect of our HR services.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </Layout>
  );
};

export default About;
