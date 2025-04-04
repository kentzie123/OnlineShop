import { useGlobalContext } from "../Context/ShopContext";
import "./CSS/Cart.css";

const Cart = () => {
  const { cart, setCart } = useGlobalContext();

  function removeToCart(productToRemove) {
    const filteredCart = cart.filter(
      (product) =>
        !(product.id === productToRemove.id && product.size === productToRemove.size)
    );
    setCart(filteredCart);
  }

  function handleAddQuantity(id) {
    const updatedCart = cart.map((item) => {
      if (id === item.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item; 
    });
    setCart(updatedCart);
  }

  function handleSubtractQuantity(id) {
    const updatedCart = cart.map((item) => {
      if (id === item.id) {
        return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }; 
      }
      return item;
    });
    setCart(updatedCart);
  }

  return (
    <section className="py-4">
      <div className="container cart-container">
        <table className="table" style={{ minWidth: "1000px" }}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    style={{ maxHeight: "65px" }}
                    src={`/Assets/${product.image}.png`}
                    alt={product.image}
                  />
                </td>
                <td className="cartData">{product.name}</td>
                <td className="cartData">${product.new_price}</td>
                <td className="cartData">{product.size}</td>
                <td className="cartData">
                  <div style={{ height: "45px" }}>
                    <button
                      className="btn btn-light rounded-0 border-secondary-subtle"
                      onClick={() => handleSubtractQuantity(product.id)}
                    >
                      -
                    </button>
                    <input
                      className="text-center"
                      type="number"
                      style={{ width: "45px", height: "40px" }}
                      value={product.quantity}
                      readOnly
                    />
                    <button
                      className="btn btn-light rounded-0 border-secondary-subtle"
                      onClick={() => handleAddQuantity(product.id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="cartData">${(product.new_price * product.quantity).toFixed(2)}</td>
                <td className="cartData">
                  <button onClick={() => removeToCart(product)} className="btn btn-close"></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container py-5">
        <h4 className="fw-semibold pb-4">Cart Totals</h4>
        <div className="row gap-3 justify-content-between">
          <div className="col-6">
            <div>
              <div className="d-flex justify-content-between">
                <span>Subtotal</span>${cart.reduce((acc, item) => acc + item.new_price * item.quantity, 0).toFixed(2)}
              </div>
              <hr className="border-2 border-dark-subtle bord" />
            </div>
            <div>
              <div className="d-flex justify-content-between">
                <span>Shipping</span>Free
              </div>
              <hr className="border-2 border-dark-subtle bord" />
            </div>
            <div>
              <div className="d-flex justify-content-between">
                <span className="fw-bold">Total</span>${cart.reduce((acc, item) => acc + item.new_price * item.quantity, 0).toFixed(2)}
              </div>
              <hr className="border-2 border-dark-subtle bord" />
            </div>
          </div>

          <div className="col-5">
            <p>If you have a promo code, enter it here</p>
            <div className="d-flex" style={{ height: "50px" }}>
              <input className="form-control rounded-0" type="text" placeholder="Enter Promo Code" />
              <button className="btn btn-dark rounded-0">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
