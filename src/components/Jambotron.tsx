import { CheckIcon } from "@heroicons/react/20/solid";

const Jambotron = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
          <h1 className="text-gray-900 text-start md:text-center dark:text-white text-3xl md:text-5xl font-extrabold mb-8">
            Our Employee Handbook Packages
          </h1>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
            Our handbook products are carefully designed to integrate HR best
            practices, reflect your business environment, and ensure that
            documented company policies and guidelines are aligned with
            employment laws. Done correctly, an employee handbook is a
            foundational component of your business—providing value to both the
            employer and employee, including:
          </p>
          <ul>
            <li className="flex gap-x-3 text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              An introduction for new employees to the policies, procedures, and
              culture of your company.
            </li>
            <li className="flex gap-x-3 text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              A helpful tool for employees and supervisors to understand and
              consistently adhere to organizational practices.
            </li>
            <li className="flex gap-x-3 text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              A useful guide to reinforce the uniform application of company
              policies.
            </li>
            <li className="flex gap-x-3 text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              Legal evidence that your company’s policies are consistent with
              and encourage adherence to employment laws.
            </li>
          </ul>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-5">
              Basic Package
            </h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                Cost includes:
              </p>
              <ul>
                <li className="flex gap-x-3 text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  1 Month free HR Advisory service
                </li>
              </ul>
            </p>
            <button className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">
              Read more
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-5">
              Standard Package
            </h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                Cost includes:
              </p>
              <ul>
                <li className="flex gap-x-3 text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  2 Month free HR Advisory service
                </li>
                <li className="flex gap-x-3 text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  Training on Handbook
                </li>
                <li className="flex gap-x-3 text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  3% Discount
                </li>
              </ul>
            </p>
            <button className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">
              Read more
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-5">
              Customised Package
            </h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                Cost includes:
              </p>
              <ul>
                <li className="flex gap-x-3 text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  3 Month free HR Advisory service
                </li>
                <li className="flex gap-x-3 text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  Training on Handbook
                </li>
                <li className="flex gap-x-3 text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  10% Discount
                </li>
              </ul>
            </p>
            <button className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">
              Read more
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jambotron;
