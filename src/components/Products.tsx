import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-5 pt-20 lg:pt-32">
        <h2 className="text-2xl md:text-4xl mb-5 font-bold text-gray-900 dark:text-gray-200 text-center">
          Product
        </h2>

        <p className="text-gray-500 max-w-5xl mx-auto dark:text-gray-400 text-lg text-center font-bold my-2">
          "Ultimate Integrated Solution: HR, CRM, Project, & Administration"
        </p>
        <p className="text-gray-500 max-w-5xl mx-auto dark:text-gray-400 text-center">
          Comprehensive business software solution that covers HR Management,
          CRM, Project Management, Finance, Remote Staff Management, and Overall
          Administration. This innovative tool redefines efficient management in
          the 21st century. Say goodbye to scattered tools and disconnected
          processes. ProDesk 24/7 for Teams brings everything together under one
          roof, streamlining collaboration and boosting productivity. No matter
          the size of your company, our platform adapts to your needs, enabling
          you to focus on what truly matters - growing your business!
          <Link
            to="/packages"
            className="inline-flex justify-center text-gray-900 hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center dark:text-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 mt-8"
          >
            View Princing
          </Link>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-24 lg:pt-20">
        <h2 className="text-2xl md:text-4xl mb-10 font-bold text-gray-900 dark:text-gray-200 text-center">
          Benefits
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
          <div>
            <svg
              className="flex-shrink-0 size-9 text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="10" height="14" x="3" y="8" rx="2" />
              <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
              <path d="M8 18h.01" />
            </svg>
            <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-white/0 h-0.5 mt-6">
              <div className="bg-gray-400 w-9 h-0.5"></div>
            </div>
            <div className="mt-5">
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Streamline your project and talent management within a singular
                system, cultivating empowered teams, satisfied clients, and
                heightened profitability, even in the realm of remote work and
                other crucial dynamics
              </p>
            </div>
          </div>

          <div>
            <svg
              className="flex-shrink-0 size-9 text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 7h-9" />
              <path d="M14 17H5" />
              <circle cx="17" cy="17" r="3" />
              <circle cx="7" cy="7" r="3" />
            </svg>
            <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-white/0 h-0.5 mt-6">
              <div className="bg-gray-400 w-9 h-0.5"></div>
            </div>
            <div className="mt-5">
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Effortlessly maintain oversight of all your projects through a
                user-friendly approach, ideal for both in-office and remote
                scenarios.
              </p>
            </div>
          </div>

          <div>
            <svg
              className="flex-shrink-0 size-9 text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-white/0 h-0.5 mt-6">
              <div className="bg-gray-400 w-9 h-0.5"></div>
            </div>
            <div className="mt-5">
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Efficiently delegate tasks to project members, closely
                monitoring their advancement regardless of their location.
              </p>
            </div>
          </div>

          <div>
            <svg
              className="flex-shrink-0 size-9 text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>
            <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-white/0 h-0.5 mt-6">
              <div className="bg-gray-400 w-9 h-0.5"></div>
            </div>
            <div className="mt-5">
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Integrate new members into your projects seamlessly, fostering
                collaboration and coherence as work progresses, regardless of
                physical proximity.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 pb-28 lg:pt-5">
        <h2 className="text-2xl md:text-4xl mb-10 font-bold text-gray-900 dark:text-gray-200 text-center">
          Features
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* <!-- Grid --> */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
            <div className="space-y-6 lg:space-y-10">
              {/* <!-- Icon Block --> */}
              <div className="flex">
                <svg
                  className="flex-shrink-0 mt-2 size-8 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="18" height="10" x="3" y="11" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" x2="8" y1="16" y2="16" />
                  <line x1="16" x2="16" y1="16" y2="16" />
                </svg>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Clocking In and Out
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Employees can easily mark their attendance by clocking in
                    and out directly from their personalized dashboard. This can
                    be achieved with a simple button press.
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="flex">
                <svg
                  className="flex-shrink-0 mt-2 size-8 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m7.5 4.27 9 5.15" />
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                  <path d="m3.3 7 8.7 5 8.7-5" />
                  <path d="M12 22V12" />
                </svg>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Remote Work Tracking
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    The module specifically addresses the challenges of managing
                    remote work. When employees are working from home or
                    off-site, the system allows them to indicate their work
                    hours accurately.
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="flex">
                <svg
                  className="flex-shrink-0 mt-2 size-8 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Reduction in Office Expenses
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Remote employees contribute to a reduction in office-related
                    expenses. If employees are working from home more often, the
                    organization can potentially downsize office space, leading
                    to cost savings on rent, utilities, and maintenance.
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}
            </div>
            {/* <!-- End Col --> */}

            <div className="space-y-6 lg:space-y-10">
              {/* <!-- Icon Block --> */}
              <div className="flex">
                <svg
                  className="flex-shrink-0 mt-2 size-8 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Clean Customization and Integration
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Our Software can be customized to suit any organization's
                    specific needs. It can also be integrated with existing
                    systems, streamlining data flow, and eliminating manual data
                    entry errors.
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="flex">
                <svg
                  className="flex-shrink-0 mt-2 size-8 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Communication and Transparency
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    The module fosters clear communication between employees and
                    management. Employees can feel more engaged and accountable,
                    knowing that their work hours are being tracked
                    transparently, regardless of their work location.
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="flex">
                <svg
                  className="flex-shrink-0 mt-2 size-8 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Streamlined Client Management
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Provide allocated clients with an integrated dashboard for
                    efficient project management, streamlined payment
                    processing, invoice tracking, and more.
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
