import { HeroTop, Pricing, Layout } from "../components";

const Products = () => {
  return (
    <Layout>
      <HeroTop image="images/2410.jpg" text="Our Products" />
      <div className="bg-white dark:bg-gray-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-center text-3xl font-bold tracking-tight dark:text-gray-200 text-gray-900 sm:text-4xl">
              Prodesk 247
            </h2>
          </div>
          <div className="mt-4 lg:mt-10 pb-5 rounded-b-lg flex items-center flex-col gap-10 lg:flex-row">
            <div className="w-full lg:w-1/2 mt-3 order-2 sm:order-1">
              <img
                src="/images/product.svg"
                alt=""
                className="w-full max-w-[600px]"
              />
            </div>
            <div className="w-full lg:w-1/2 order-1 sm:order-2">
              <div className="w-full">
                <p className="text-center lg:text-start mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                  <p className="text-primaryColor2 underline">
                    Ultimate Integrated Solution: HR, CRM, Project, &
                    Administration.
                  </p>
                  Comprehensive business software solution that covers HR
                  Management, CRM, Project Management, Finance, Remote Staff
                  Management, and Overall Administration. This innovative tool
                  redefines efficient management in the 21st century. Say
                  goodbye to scattered tools and disconnected processes. ProDesk
                  24/7 for Teams brings everything together under one roof,
                  streamlining collaboration and boosting productivity. No
                  matter the size of your company, our platform adapts to your
                  needs, enabling you to focus on what truly matters - growing
                  your business
                </p>
              </div>
            </div>
          </div>
          <Pricing />
        </div>
      </div>
    </Layout>
  );
};

export default Products;
