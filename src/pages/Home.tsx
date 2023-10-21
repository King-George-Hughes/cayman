import {
  Heading,
  Hero,
  HomeHeroTop,
  Jambotron,
  Layout,
  Services,
} from "../components";
import OurClients from "../components/OurClients";

const Home = () => {
  return (
    <>
      <Layout>
        <HomeHeroTop />
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
