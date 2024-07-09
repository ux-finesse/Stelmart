import Header from "../layout/header/Header";
import Hero from "../components/hero/Hero";
import Exclusive from "../components/exclusive/Exclusive";
import Popular from "../components/popular/Popular";
import Recommended from "../components/recommended/Recommended";
import Banners from "../components/banners/Banners";
import BestDeal from "../components/best-deal/BestDeal";
import Subscribe from "../components/subscribe/Subscribe";
import Footer from "../layout/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Exclusive />
      <Popular />
      <Recommended />
      <Banners />
      <BestDeal />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
