import {
  Heading,
  Hero,
  HomeHeroTop,
  Jambotron,
  Layout,
  Products,
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
        <Products />
        <Jambotron />
        <OurClients />
      </Layout>
    </>
  );
};

export default Home;
