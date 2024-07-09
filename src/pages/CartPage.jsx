import Header from "../layout/header/Header";
import CartList from "../components/cartlist/CartList";
import SimilarProducts from "../components/similar-products/SimilarProducts";
import Subscribe from "../components/subscribe/Subscribe";
import Footer from "../layout/footer/Footer";

const CartPage = () => {
  return (
    <>
      <Header />
      <CartList />
      <SimilarProducts />
      <Subscribe />
      <Footer />
    </>
  );
};

export default CartPage;
