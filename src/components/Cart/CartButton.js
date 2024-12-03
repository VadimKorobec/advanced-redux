import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { toggle } from "../store/uiSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const handleToggleCart = () => {
    dispatch(toggle());
  };

  return (
    <button onClick={handleToggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
