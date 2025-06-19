import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct, editProduct } from "./productsSlice";
import { addToCart } from "../cart/cartSlice";
import { useState } from "react";

const ProductTable = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({});

  const handleEdit = (product) => {
    setEditId(product.id);
    setFormData(product);
  };

  const handleSave = () => {
    dispatch(editProduct(formData));
    setEditId(null);
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>
              {editId === product.id ? (
                <input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              ) : (
                product.name
              )}
            </td>
            <td>
              {editId === product.id ? (
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              ) : (
                product.price
              )}
            </td>
            <td>
              {editId === product.id ? (
                <input
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              ) : (
                product.description
              )}
            </td>
            <td>
              {editId === product.id ? (
                <input
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                />
              ) : (
                <img
                  src={product.image}
                  alt={product.name}
                  width={50}
                  height={50}
                />
              )}
            </td>
            <td>
              {editId === product.id ? (
                <>
                  <button
                    className="btn btn-success btn-sm me-1"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setEditId(null)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-primary btn-sm me-1"
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-warning btn-sm me-1"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm me-1"
                    onClick={() => dispatch(deleteProduct(product.id))}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() =>
                      dispatch(addToCart({ ...product, quantity: 1 }))
                    }
                  >
                    Add to Cart
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
