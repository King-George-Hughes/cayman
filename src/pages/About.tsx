import { Layout } from "../components";

const About = () => {
  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-lg text-start lg:py-16">
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

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-200 text-center lg:text-start mt-10 md:mt-20 mb-5">
            Our Mission.
          </h2>

          <p className="mb-5 text-gray-500 dark:text-gray-400 lg:w-1/2">
            To provide a needed service in the area of Human Resource Management
            at an affordable cost without compromising on quality.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-200 text-center lg:text-start mt-10 md:mt-20 mb-5">
            Our Vission.
          </h2>

          <p className="mb-5 text-gray-500 dark:text-gray-400 lg:w-1/2">
            To become a leading support and service provider in the Human
            Resource Consulting industry, to individuals and corporate
            institutions.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-200 text-center lg:text-start mt-10 md:mt-20 mb-5">
            Our Core Values.
          </h2>

          <p className="mb-5 text-gray-500 dark:text-gray-400 lg:w-1/2">
            Our core values of customer satisfaction, continuous improvement,
            teamwork, and achieving results are woven into every aspect of our
            HR services.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
