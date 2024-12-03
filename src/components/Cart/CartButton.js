import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { open } from "../store/openCartSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const handleOpenCart = () => {
    dispatch(open());
  };

  return (
    <button onClick={handleOpenCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
