import styles from './Basket.module.scss'
import {useState, useContext} from "react";
import BasketDetails from "../basket.Details/BasketDetails";
import {CartContext} from "../../App";

function Basket() {
    const [cart] = useContext(CartContext); //, setCart
    const [isDetailsVisible, setIsDetailsVisible] = useState(false)

    const toggleDetails = () => {
        if (isDetailsVisible) {
            closedetails()
        } else {
            showdetails()
        }
    }
    const showdetails = () => {
        setIsDetailsVisible(true)
    }
    const closedetails = () => {
        setIsDetailsVisible(false)
    }

    return (
        <div>
            <div className={styles.cartContent}>
                <div onClick={toggleDetails}><img className={styles.basketLogo} alt="" src="/logo192.png"/> <span
                    className={styles.counter}>{Object.keys(cart).length} </span></div>
                
            </div>
            {isDetailsVisible && <BasketDetails handleClose={closedetails}/>}
        </div>
    )

}

export default Basket