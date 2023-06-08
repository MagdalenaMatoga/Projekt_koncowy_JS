import styles from './DishCard.module.scss'
import {useContext} from "react";
import {CartContext} from "../../App";


function DishCard(props) {
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        console.log(cart)
        if (cart[props.cardData.id] === undefined) {
            setCart({
                    ...cart,
                    [props.cardData.id]: {quantity: 1, product: props.cardData}
            })
        } else {
            const existingItem = cart[props.cardData.id]
            setCart({
                    ...cart,
                    [props.cardData.id]: {quantity: existingItem.quantity + 1, product: props.cardData}

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