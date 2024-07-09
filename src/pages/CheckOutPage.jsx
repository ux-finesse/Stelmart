import Header from "..//layout/header/Header";
import Subscribe from "../components/subscribe/Subscribe";
import Footer from "../layout/footer/Footer";
import CheckOut from "../components/checkout/CheckOut";

const CheckOutPage = () => {
  return (
    <>
      <Header />
      <CheckOut />
      <Subscribe />
      <Footer />
    </>
  );
};

export default CheckOutPage;
