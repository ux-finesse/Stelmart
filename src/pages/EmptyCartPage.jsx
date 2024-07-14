import Header from "../layout/header/Header";
import SimilarProducts from "../components/similar-products/SimilarProducts";
import Subscribe from "../components/subscribe/Subscribe";
import EmptyCart from "../components/emptycart/EmptyCart";
import Footer from "../layout/footer/Footer";

const CartPage = () => {
  return (
    <>
      <Header />
      <EmptyCart />
      <SimilarProducts />
      <Subscribe />
      <Footer />
    </>
  );
};

export default CartPage;
