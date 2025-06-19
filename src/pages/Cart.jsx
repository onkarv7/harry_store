import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return (
    <div>
      <h3>Cart</h3>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt={item.name} width={50} />
                </td>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(item.id, Number(e.target.value))
                    }
                    className="form-control form-control-sm"
                    style={{ width: "70px" }}
                  />
                </td>
                <td>₹{item.price * item.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="4">
                <strong>Grand Total</strong>
              </td>
              <td colSpan="2">
                <strong>₹{total}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
