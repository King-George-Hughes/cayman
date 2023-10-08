import { Layout, Package } from "../components";

const packages = [
  {
    id: 1,
    title: "Bronze",
    subText: "Invoices shall be issued for specific services with 2% Discount",
    price: 1_500.0,
    includedFeatures: [
      "Performance Management",
      "Employee Relations and Management services",
      "HR Advisory Services",
      "Recruitment and staffing solutions",
    ],
  },
  {
    id: 2,
    title: "Silver",
    subText: "Invoices shall be issued for specific services with 4% Discount",
    price: 2_000.0,
    includedFeatures: [
      "Recruitment and staffing solutions",
      "Employee Training and Career Development",
      "HR Policies and HR Strategy Development",
      "Employee Relations and Management services",
      "Performance Management",
      "HR Advisory Services",
    ],
  },
  {
    id: 3,
    title: "Gold",
    subText: "Invoices shall be issued for specific services with 6% Discount",
    price: 3_000.0,
    includedFeatures: [
      "Recruitment and staffing solutions with Employment contracts",
      "Training and Career Development",
      "HR Policies and HR Strategy Development",
      "Employee Relations and Management services",
      "Performance Management",
      "HR Advisory Services",
    ],
  },
  {
    id: 4,
    title: "Platinum",
    subText: "Invoices shall be issued for specific services with 8% Discount",
    price: 4_000.0,
    includedFeatures: [
      "Payroll Administration",
      "Statutory Payments and compliance",
      "Corporate Secretarial services",
      "Virtual Assistance services",
      "Recruitment and staffing solutions",
      "HR Policies and HR Strategy Development",
      "HR Advisory Services",
      "Employee Relations and Management services",
    ],
  },
];

const Packages = () => {
  return (
    // dark:bg-gray-900
    <Layout>
      <div className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Retainer Packages
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our retainer packages are competitively priced based on the
              services included and the level of support required. We offer
              flexible payment options to suit your budget.
            </p>
          </div>
          {packages.map((pkg) => {
            const { id, title, subText, price, includedFeatures } = pkg;
            return (
              <Package
                key={id}
                title={title}
                subText={subText}
                price={price}
                includedFeatures={includedFeatures}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Packages;
