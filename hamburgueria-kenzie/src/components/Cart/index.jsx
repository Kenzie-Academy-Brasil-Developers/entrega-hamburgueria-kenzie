import { CartCard } from "./Card";
import { CartOrganizer } from "./styles";
export function Cart({ cartItems, setCartItems }) {
  const removeItem = (itemIndex) => {
    console.log(cartItems[itemIndex]);
    if (cartItems[itemIndex].quantity > 1) {
      cartItems[itemIndex].quantity -= 1;
      setCartItems([...cartItems]);
    } else {
      setCartItems(cartItems.filter((item, i) => i !== itemIndex));
    }
  };
  const totalPrice = cartItems
    .reduce((acc, current) => acc + current.price * current.quantity, 0)
    .toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <CartOrganizer>
      <div className="cart-header">
        <h3>Carrinho de Compras</h3>
      </div>
      <div className="cart-items">
        {cartItems?.map((prod, i) => (
          <CartCard prod={prod} removeItem={removeItem} index={i} key={i} />
        ))}
      </div>
      <div className="cart-infos">
        <h4>Total:</h4>
        <h4 className="total-price">{totalPrice}</h4>
      </div>
      <button className="remove-all-items" onClick={() => setCartItems([])}>
        Remover Todos
      </button>
    </CartOrganizer>
  );
}
