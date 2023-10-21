import {
  Heading,
  Hero,
  HomeHeroTop,
  Jambotron,
  Layout,
  Services,
  Subscribe,
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
        <Subscribe />
        <OurClients />
      </Layout>
    </>
  );
};

export default Home;
