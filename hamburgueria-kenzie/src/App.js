import { useEffect, useState, Fragment } from "react";

import GlobalStyle from "./styles/global";
import { Header } from "./components/header";
import { ProductList } from "./components/ProductList";
import { api } from "./services/api";
import { Cart } from "./components/Cart";
import { StyledPage } from "./styles/style";

function App() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (prod) => {
    const verify = cartItems.findIndex((item) => item.name === prod.name);
    if (verify !== -1) {
      cartItems[verify].quantity += 1;
      setCartItems([...cartItems]);
    } else {
      prod.quantity = 1
      setCartItems([...cartItems, prod]);
    }
  };

  useEffect(() => {
    async function requestProducts() {
      try {
        const response = await api.get("products", {});
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (err) {}
    }
    requestProducts();
  }, []);

  return (
    <StyledPage>
      <GlobalStyle />
      <Header products={products} setFilteredProducts={setFilteredProducts} />
      <main>
        <ProductList products={filteredProducts} addToCart={addToCart} />
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </main>
    </StyledPage>
  );
}

export default App;
