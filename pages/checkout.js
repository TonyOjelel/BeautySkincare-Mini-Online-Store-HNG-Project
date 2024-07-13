// pages/checkout.js
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    alert('Checkout successful!');
    clearCart();
  };

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x {item.price}
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Checkout;
