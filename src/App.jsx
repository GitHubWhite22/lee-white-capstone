import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./Pages/Login";
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
          <Route path="Login" element={<Login />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SingleItem" element={<SingleItem />} />
          <Route path="/:id" element={<SingleItem />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
