import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { CartState } from "./context/Context";

const Cart = () => {
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <span>{prod.name}</span>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal({cart.length}) items </span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total:${total}</span>
        <Button type="button" disabled={cart.length == 0}>
          Proceed To Checkout
        </Button>
      </div>
    </div>
  );
};
export default Cart;
