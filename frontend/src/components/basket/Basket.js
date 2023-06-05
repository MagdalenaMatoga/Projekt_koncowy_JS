import styles from './Basket.module.scss'
import { useState, useContext, useEffect } from "react";
import BasketDetails from "../basket.Details/BasketDetails";
import { CartContext } from "../../App";

function Basket() {
  const [cart] = useContext(CartContext);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [totalCartItems, setTotalCartItems] = useState(0); //  stan do przechowywania liczby produktów w koszyku

  useEffect(() => {
    let totalCount = 0;
    Object.values(cart).forEach(item => {
      totalCount += item.quantity;
    });
    setTotalCartItems(totalCount);
  }, [cart]);

  const toggleDetails = () => {
    if (isDetailsVisible) {
      closeDetails();
    } else {
      showDetails();
    }
  };
  const showDetails = () => {
    setIsDetailsVisible(true);
  };
  const closeDetails = () => {
    setIsDetailsVisible(false);
  };

  return (
    <div>
      <div className={styles.cartContent}>
        <div onClick={toggleDetails}>
          <img className={styles.basketLogo} alt="" src="/logo192.png" />{" "}
          <span className={styles.counter}>{totalCartItems} </span>
        </div>
      </div>
      {isDetailsVisible && <BasketDetails handleClose={closeDetails} />}
    </div>
  );
}

export default Basket;
