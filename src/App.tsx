import { Footer, Hero, Jambotron, NavBar, Services } from "./components";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-lg text-center lg:py-16">
          <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
            Track work across the enterprise through an open, collaborative
            platform. Link issues across Jira and ingest data from other
            software development tools, so your IT support and operations teams
            have richer contextual information to rapidly respond to requests,
            incidents, and changes.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions.Accelerate critical development work,
            eliminate toil, and deploy changes with ease, with a complete audit
            trail for every change.
          </p>
        </div>
      </div>
      <Services />
      <Jambotron />
      <Footer />
    </>
  );
}

export default App;
