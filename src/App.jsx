import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import LandingPage from "./Pages/LandingPage.jsx";
import Footer from "./components/Footer.jsx";
// import Cart from "./Pages/Cart";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/upload" element={<Cart />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
