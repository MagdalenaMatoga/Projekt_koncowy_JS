import styles from "./BasketDetails.module.scss"
import {useContext, useEffect, useState} from "react";
import {CartContext} from "../../App";

function BasketDetails(props) {
    const [cart, setCart] = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        let tempPrice = 0
        Object.entries(cart).forEach(entry => {
            tempPrice += parseFloat(entry[1].product.price * entry[1].quantity)
        })
        setTotalPrice(tempPrice)
    }, [cart])

    const removeFromCart = (id) => {
        if (cart[id]) {
            if (cart[id].quantity > 1) {
                const newProduct = {...cart[id], quantity: cart[id].quantity - 1}
                const newCart = {...cart, [cart[id].product.id]: newProduct}
                setCart({...newCart})
            } else {
                const newCart = cart
                delete newCart[id]
                setCart({...newCart})
            }
        }
    }

    return (
        <div className={styles.details}> Twoje zamówienie
            {cart && Object.entries(cart).map((entry, index) => {
                const itemObject = entry[1]
                return (
                    <div key={itemObject.product.id}>
                        {itemObject.quantity} - {itemObject.product.title} - {itemObject.product.price}
                        <img className={styles.cartPhoto} src={"images/" + itemObject.product.picture} />
                        <button onClick={() => removeFromCart(itemObject.product.id)}>usun</button>
                    </div>
                )
            })}
            <p>cena: {totalPrice}</p>
            <button className={styles.close} onClick={props.handleClose}> Zwiń</button>
            <button className={styles.buy} disabled>Zamów</button>
            <h3 className={styles.total}>Podsumowanie</h3>
        </div>

    )

}


export default BasketDetails