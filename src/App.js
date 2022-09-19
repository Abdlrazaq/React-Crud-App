import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import AddProducts from "./pages/AddProducts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2 mt-1 sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="categories" element={<Categories />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<AddProducts />} />

            {/* <Route path="products" element={<Products />}>
              <Route path="add" element={<AddProducts />} />
            </Route> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
