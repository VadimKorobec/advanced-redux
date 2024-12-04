import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { addItemToCart } from "../store/cartSlice";

const ProductItem = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddItemToCart = () => {
    dispatch(addItemToCart({
      id: book.id,
      price: book.price,
      title: book.title,
      description:book.description
    }))
  }
  
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{book.title}</h3>
          <div className={classes.price}>${book.price.toFixed(2)}</div>
        </header>
        <p>{book.description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddItemToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
