export default function OurClients() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-200 text-center">
          Our Trusted Clients
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-7 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-8">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/clients/act.jpeg"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/clients/dad.jpeg"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
            src="/clients/axis.jpeg"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="/clients/lotus.jpeg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/clients/property.jpeg"
            alt="Statamic"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/clients/rijalco.jpeg"
            alt="Statamic"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/clients/st jude.jpeg"
            alt="Statamic"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/clients/zest.jpeg"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
