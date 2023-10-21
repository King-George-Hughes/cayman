const Heading = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:pt-20 px-4 mx-auto max-w-screen-lg text-start lg:py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-200 text-center mb-10 md:mb-14">
          About Cayman Ghana Limited.
        </h2>

        {/*  */}
        <div className="mt-10 pb-5 rounded-b-lg flex items-center flex-col gap-10 lg:gap-24 lg:flex-row">
          <div className="w-full lg:w-1/2 mt-3 order-2 sm:order-1">
            <img src="/images/home.svg" alt="" />
          </div>
          <div className="w-full lg:w-1/2 order-1 sm:order-2">
            <div className="w-full">
              <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-[#dacb46] first-letter:mr-3 first-letter:float-left">
                Cayman Ghana Ltd is a human capital development consulting firm
                that aims to provide individuals and corporate organizations all
                kinds of HR needs at one convinient source.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                As an ambitious HR consultancy with a drive to become the 'HR
                Partner of Choice', we offer a wide variety of services thatt
                help you increase employee motivation and performance, which in
                turn ccreates a more profitable business. Our flexible support
                options are designed to help clients scale to their full
                potential and are offered on a retained, project or ad-hoc
                basis.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Heading;
