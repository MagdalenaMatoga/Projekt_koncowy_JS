import styles from './Basket.module.scss'
import { useState, useContext, useEffect } from "react";
import BasketDetails from "../basket.Details/BasketDetails";
import { CartContext } from "../../App";

function Basket() {
  const [cart] = useContext(CartContext);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false); //przy użyciu hooka  służy do śledzenia widoczności szczegółów koszyka
  const [totalCartItems, setTotalCartItems] = useState(0); //  stan do przechowywania liczby produktów w koszyku

  // monitorowanie zmian w koszyku. UseEffect oblicza sumę wszystkich ilości produktów w koszyku i aktualizuje stan totalCartItems z tą wartością.

  useEffect(() => {  
    let totalCount = 0;
    Object.values(cart).forEach(item => {
      totalCount += item.quantity;
    });
    setTotalCartItems(totalCount);
  }, [cart]);

  //ToggleDetails, showDetails i closeDetails. wykorzystywane do przełączania widoczności szczegółów koszyka. toggleDetails sprawdza, czy szczegóły są aktualnie widoczne i na tej podstawie wywołuje showDetails lub closeDetails.

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
          <img className={styles.basketLogo} alt="" src="/shopping-cart.png" />{" "}
          <span className={styles.counter}>{totalCartItems} </span>
        </div>
      </div>
      {isDetailsVisible && <BasketDetails handleClose={closeDetails} />} 
    </div>
  );   //isDetailsVisible jest ustawione na true, to zostanie wyrenderowany komponent BasketDetails  z przekazaniem do niego propsa handleClose, który wskazuje na funkcję closeDetails. W przypadku, jeśli isDetailsVisible jest ustawione na false, nic nie zostanie wyrenderowane.
}

// Przekazanie funkcji closeDetails do komponentu <BasketDetails /> jako props handleClose. Komunikacja między Basket a BasketDetails


export default Basket;
