import styles from './DishCard.module.scss'
import {useContext} from "react";
import {CartContext} from "../../App";


function DishCard(props) {
    const [cart, setCart] = useContext(CartContext); //użycie hook useContext, który pobiera wartość cart i setCart z kontekstu CartContext (dostęp do koszyka i jego funkcji)

    const addToCart = () => {
        console.log(cart)
        if (cart[props.cardData.id] === undefined) { //Sprawdza, czy produkt o identyfikatorze props.cardData.id już istnieje w koszyku 
            setCart({
                    ...cart,
                    [props.cardData.id]: {quantity: 1, product: props.cardData} //jeśli nie istnieje dodawany jest jako nowy element z ilością (quantity) 1 
            })
        } else {
            const existingItem = cart[props.cardData.id] //Jeśli produkt już istnieje w koszyku, pobierana jest jego istniejąca ilość (existingItem.quantity) i dodawane jest 1
            setCart({
                    ...cart,
                    [props.cardData.id]: {quantity: existingItem.quantity + 1, product: props.cardData} //

            })
        }
    }

    return (

        <div className={styles.card} style={{
            display: 'flex', paddingLeft: 30, alignItems: 'center'
        }}>
            <h4 className={styles.title}>{props.cardData.title}</h4>
            <img className={styles.image} alt="" src={"./images/" + props.cardData.picture}></img>
            <p className={styles.text}>{props.cardData.text} </p>
            <h3 className={styles.price}>{props.cardData.price} zł </h3>


            <button onClick={addToCart} className={styles.btn}>Dodaj do koszyka</button>

        </div>

    );
}

export default DishCard