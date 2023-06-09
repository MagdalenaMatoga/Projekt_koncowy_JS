import styles from "./BasketDetails.module.scss";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../App";

function BasketDetails(props) {
  const [cart, setCart] = useContext(CartContext); //uzyskanie dostępu do cart 
  const [totalPrice, setTotalPrice] = useState(0); //przechowywanie łączniej wartości koszyka

  //po każdej zmianie obliczana łączną wartość koszyka - przechodzi przez elementy koszyka dzieki Obcject.enteries (cart) i sumuje wartości price dla każdego produktu pomnożoną przez jego ilość. Następnie aktualizuje stan totalPrice za pomocą funkcji setTotalPrice

  useEffect(() => { 
    let tempPrice = 0;
    Object.entries(cart).forEach((entry) => {   //Metoda Object.entries(cart) konwertuje obiekt cart na tablicę, która zawiera pary klucz-wartość.
      tempPrice += parseFloat(entry[1].product.price * entry[1].quantity); //obliczana  tymczasowa cena dla danego produktu, pomnożenie ceny (entry[1].product.price) produktu przez ilość (entry[1].quantity). Wartości te są sumowane i przypisywane do tempPrice.
    });
    setTotalPrice(tempPrice);
  }, [cart]);

  //removeFromCart jest wywoływana, gdy użytkownik kliknie przycisk "minus". Sprawdza czy w koszyku jest produkt o danym ID i aktualizuje koszyk przez zmniejszenie ilości tego produktu o 1 lub usunięcie go z koszyka, jeśli ilość wynosi 1.

  const removeFromCart = (id) => {   
    if (cart[id]) { //sprawdza czy id jest w koszyku
      if (cart[id].quantity > 1) { //sprawdza czy ilość w koszyku jest większa niż 1
        const newProduct = { ...cart[id], quantity: cart[id].quantity - 1 };
        const newCart = { ...cart, [cart[id].product.id]: newProduct }; //przez newProduct tworzona jest kopia produktu, która ma zostać zmniejszona o 1.  - skopiowane wszystkie produkty przez spread i dopisane quantity 
        setCart({ ...newCart }); //aktualizacja stanu koszyka i przekazuje nową wartość koszyka
      } else {
        const newCart = cart; //utworzona kopia obecnego koszyka
        delete newCart[id]; //użycie delete aby usunąć produkt o danym id z koszyka
        setCart({ ...newCart }); // wywołanie aby zaktualizować stan koszyka przekazaując NewCart jako nową wartość cart
      }
    }
  };

  //Funkcja addToCart jest wywoływana, gdy użytkownik kliknie przycisk "dodaj" przy elemencie koszyka. Zwiększa ilość produktu o 1 w koszyku.

  const addToCart = (id) => {
    const newProduct = { ...cart[id], quantity: cart[id].quantity + 1 };
    const newCart = { ...cart, [cart[id].product.id]: newProduct };
    setCart({ ...newCart });
  };

  //Komponent renderuje różne elementy w zależności od zawartości koszyka. Jeśli koszyk jest pusty, wyświetla komunikat informujący o pustym koszyku. W przeciwnym razie, iteruje przez elementy koszyka za pomocą Object.entries(cart) i renderuje informacje o każdym produkcie, wraz z przyciskami "usuń" i "dodaj" dla zmiany ilości produktu.

  return (
    <div className={styles.gridContainer}>
      <div onClick={props.handleClose}>
        <img className={styles.close} alt="" src="/mark.png" />
      </div>
      <h2 className={styles.title}>Twoje zamówienie</h2>
      {Object.keys(cart).length === 0 ? (
        <p className={styles.emptyCartText}>Twój koszyk jest pusty</p>
      ) : (
        <> 
          <div className={styles.gridItems}>
            {Object.entries(cart).map((entry, index) => {
              const itemObject = entry[1];
              return ( //Object.entries(cart) zamienia obiekt cart na tablicę zawierającą tablice dwuelementowe. Każda tablica dwuelementowa zawiera klucz i wartość pary klucz-wartość z obiektu cart. map zwraca elementy dla każdego produktu. entry[1] odnosi się do wartości z pary klucz-wartość, czyli obiektu produktu w koszyku. Przypisanie entry[1] do zmiennej itemObject pozwala łatwiej odwoływać się do właściwości tego obiektu, takich jak itemObject.product.id, ...
                <div key={itemObject.product.id} className={styles.gridItem}> 
                  <div className={styles.itemInfo}>
                    <img
                      className={styles.cartPhoto}
                      alt=""
                      src={"images/" + itemObject.product.picture}
                    />
                    <span>{itemObject.product.title}</span>
                    <div className={styles.cost}>
                      {itemObject.quantity} x {itemObject.product.price} zł
                    </div>
                  </div>
                  <div className={styles.btn}>
                    <div onClick={() => removeFromCart(itemObject.product.id)}>
                      <img className={styles.minus} alt="" src="/minus.png" />
                    </div>
                    <div onClick={() => addToCart(itemObject.product.id)}>
                      <img className={styles.plus} alt="" src="/plus.png" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.buttonsContainer}>
            <p className={styles.totalPrice}>Łączna kwota: {totalPrice} zł</p>
            <button className={styles.buy} disabled>
              Przejdź do kasy
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default BasketDetails;
