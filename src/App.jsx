import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import LandingPage from "./Pages/LandingPage.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header";
import Cart from "./Pages/Cart";
import SingleItem from "./Pages/SingleItem";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SingleItem" element={<SingleItem />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
