import {
  Heading,
  Hero,
  Jambotron,
  Layout,
  Pricing,
  Services,
} from "../components";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Heading />
        <Services />
        <Jambotron />
        <Pricing />
      </Layout>
    </>
  );
};

export default Home;
