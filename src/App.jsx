import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
// import OrderComplete from "./pages/OrderComplete";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        {/* <Route path="/ordercomplete" element={<OrderComplete />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
