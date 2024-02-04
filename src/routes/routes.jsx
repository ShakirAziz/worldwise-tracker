import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Product from "../pages/Product";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import Pricing from "../pages/Pricing";
import PageNav from "../components/AppNav";
import AppLayout from "../pages/AppLayout";

function Routers() {
  return (
    <>
      <BrowserRouter>
        <PageNav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/AppLayout" element={<AppLayout />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers;
