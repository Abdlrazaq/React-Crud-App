import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(products);
      });
  }, []);
  return (
    <div className="products">
      <h2>Products Page</h2>
      <Link to={"/products/add"} className="btn btn-success my-3">
        Add New Prodcut
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description.slice(0,20)}...</td>
              <td>{product.price}</td>
              <td>
                <button className="btn btn-danger btn-sm">Delete</button>
                <button className="btn btn-info btn-sm mx-1">View</button>
                <button className="btn btn-primary btn-sm">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
