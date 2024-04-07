interface ServiceData {
  name: string;
  description: string[];
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const callouts = [
  {
    name: "Business Support Services",
    description: [
      "Company Taxation & Auditing Services",
      "Automated Payroll Administration",
      "Business Process Outsourcing",
      "Stationary Compliance & Registration",
    ],
    imageSrc: "images/1.jpg",
    imageAlt: "Busines Support Services",
    href: "#",
  },
  {
    name: "Human Resource Management",
    description: [
      "HR Outsourcing",
      "Policies, Procedures, and Constraints",
      "Employee Handbook",
      "HR Advisory and Guidance",
      "HR Audit",
      "Management Training",
    ],
    imageSrc: "images/2.jpg",
    imageAlt: "Human Resource Management",
    href: "#",
  },
  {
    name: "Talent Management",
    description: [
      "Recruitment, Selection, and Replacement",
      "Job Analysis and Profilling",
      "Performance Management",
      "Training and Development",
    ],
    imageSrc: "images/3.jpg",
    imageAlt: "Talent Management",
    href: "#",
  },
];

const Services = () => {
  return (
    <div>
      <div className="bg-white dark:bg-gray-900" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-200 text-center">
              Our Services
            </h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout: ServiceData) => (
                <div className="w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img
                    className="rounded-t-lg"
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                  />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {callout.name}
                    </h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <ul>
                        {callout.description.map((desc) => {
                          return <li>{desc}</li>;
                        })}
                      </ul>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
