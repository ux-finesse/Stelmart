import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import Notification from "./components/notification/Notification";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Notification />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
    </Router>
  )
}

export default App;

