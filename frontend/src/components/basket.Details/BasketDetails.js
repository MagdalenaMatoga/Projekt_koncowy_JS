import styles from "./BasketDetails.module.scss";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../App";

function BasketDetails(props) {
  const [cart, setCart] = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let tempPrice = 0;
    Object.entries(cart).forEach((entry) => {
      tempPrice += parseFloat(entry[1].product.price * entry[1].quantity);
    });
    setTotalPrice(tempPrice);
  }, [cart]);

  const removeFromCart = (id) => {
    if (cart[id]) {
      if (cart[id].quantity > 1) {
        const newProduct = { ...cart[id], quantity: cart[id].quantity - 1 };
        const newCart = { ...cart, [cart[id].product.id]: newProduct };
        setCart({ ...newCart });
      } else {
        const newCart = cart;
        delete newCart[id];
        setCart({ ...newCart });
      }
    }
  };

  const addToCart = (id) => {
    const newProduct = { ...cart[id], quantity: cart[id].quantity + 1 };
    const newCart = { ...cart, [cart[id].product.id]: newProduct };
    setCart({ ...newCart });
  };

  return (
    <div className={styles.gridContainer}>
      <div onClick={props.handleClose}>
        <img className={styles.close} alt="" src="/mark.png" />
      </div>
      <h2 className={styles.title}>Twoje zamówienie</h2>
      {cart &&
        Object.entries(cart).map((entry, index) => {
          const itemObject = entry[1];
          return (
            <div key={itemObject.product.id} className={styles.gridItem}>
              <div className={styles.itemInfo}>
                <img
                  className={styles.cartPhoto}
                  alt=""
                  src={"images/" + itemObject.product.picture}
                />
                <span>{itemObject.product.title}</span>
              </div>
              <div>
                {itemObject.quantity} x {itemObject.product.price} zł
              </div>
              <div onClick={() => removeFromCart(itemObject.product.id)}>
                <img className={styles.minus} alt="" src="/minus.png" />
              </div>
              <div onClick={() => addToCart(itemObject.product.id)}>
                <img className={styles.plus} alt="" src="/minus.png" />
              </div>
              
              </div>
          
          );
        })}
      <div className={styles.buttonsContainer}>
        <button className={styles.buy} disabled>
          Zamów
        </button>
        <p className={styles.totalPrice}>cena: {totalPrice} zł</p>
      </div>
    </div>
  );
}

export default BasketDetails;