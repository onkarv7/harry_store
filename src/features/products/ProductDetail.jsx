// src/pages/ProductDetail.jsx
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.find((p) => p.id === id)
  );
  const dispatch = useDispatch();

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container">
      <Link to="/products" className="btn btn-outline-secondary mb-3">
        ← Back to Products
      </Link>
      <div className="card p-4 d-flex flex-md-row align-items-center">
        <div className="me-md-4 mb-3 mb-md-0">
          <img
            src={product.image}
            className="img-fluid"
            alt={product.name}
            style={{
              maxWidth: "400px",
              maxHeight: "400px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="flex-grow-1">
          <div className="card-body">
            <h5 className="card-title text-uppercase">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">Price: ₹{product.price}</p>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
