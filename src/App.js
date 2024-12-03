import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const isShow = useSelector((state) => state.openCart.isOpen);
  console.log(isShow);
  return (
    <Layout>
      {isShow && <Cart />}
      {isShow && <Products />}
    </Layout>
  );
}

export default App;
