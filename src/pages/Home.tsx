import { Heading, Hero, Jambotron, Layout, Services } from "../components";
import OurClients from "../components/OurClients";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Heading />
        <Services />
        <Jambotron />
        <OurClients />
      </Layout>
    </>
  );
};

export default Home;
