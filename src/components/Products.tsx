const Products = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-5 py-28 lg:pt-32">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
          {/* <!-- Icon Block --> */}
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
          {/* <!-- End Icon Block --> */}

          {/* <!-- Icon Block --> */}
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
          {/* <!-- End Icon Block --> */}

          {/* <!-- Icon Block --> */}
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
          {/* <!-- End Icon Block --> */}

          {/* <!-- Icon Block --> */}
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
          {/* <!-- End Icon Block --> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
