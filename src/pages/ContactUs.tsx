import { useState } from "react";
import { Switch } from "@headlessui/react";
import { HeroTop, Layout } from "../components";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactUs() {
  const [agreed, setAgreed] = useState(false);

  return (
    <Layout>
      <HeroTop image="images/contact_us.jpg" text="Contact Us" />
      <div className="isolate px-6 py-16 sm:py-20 lg:px-8 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight dark:text-gray-100 text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-2 text-lg leading-8 dark:text-gray-400 text-gray-600">
            For further information, kindly contact Cayman Ghana Limited.
          </p>
        </div>
        <form
          //   action="#"
          //   method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 dark:text-[#dacb46] text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600  placeholder:text-gray-400 focus:ring-2 focus:ring-inset dark:focus:ring-indigo-50 focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-400 bg-transparent"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 dark:text-[#dacb46] text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-400 bg-transparent"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 dark:text-[#dacb46] text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-400 bg-transparent"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="block text-sm font-semibold leading-6 dark:text-[#dacb46] text-gray-900"
              >
                Contact Number
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-400 bg-transparent"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="block text-sm font-semibold leading-6 dark:text-[#dacb46] text-gray-900"
              >
                Subject
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-400 bg-transparent"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 dark:text-[#dacb46] text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-400 bg-transparent"
                  defaultValue={""}
                />
              </div>
            </div>
            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? "bg-[#dacb46]" : "bg-gray-400",
                    "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dacb46]"
                  )}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? "translate-x-3.5" : "translate-x-0",
                      "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm leading-6 dark:text-gray-400 text-gray-600">
                By selecting this, you agree to our{" "}
                <a href="#" className="font-semibold text-[#dacb46]">
                  privacy&nbsp;policy
                </a>
                .
              </Switch.Label>
            </Switch.Group>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-[#dacb46] px-3.5 py-2.5 text-center text-sm font-semibold text-gray-800 shadow-sm hover:bg-[#dacb20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dacb46]"
              onClick={(e) => e.preventDefault()}
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
