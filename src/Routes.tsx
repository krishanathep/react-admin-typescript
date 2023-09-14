import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WithNavbar from "./layouts/WithNavbar";
import WithOutNavbar from "./layouts/WithOutNavbar";

import Signin from "./pages/auth/signin";
import Home from './pages/home'
import Products from "./pages/products";

const RoutesPage = () => {
  return (
    <Router>
      <Routes>
        <Route element={<WithOutNavbar/>}>
          <Route path="/auth/signin" element={<Signin/>}/>
        </Route>
        <Route element={<WithNavbar/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesPage;
