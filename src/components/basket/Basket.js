
import styles from './Basket.modules.scss'
import {useState, useEffect } from "react";
import BasketDetails from "../basket.Details/BasketDetails";




function Basket(){
    const [cart, setCard] = useState(0)
    const [isDetailsVisible, setIsDetailsVisible] = useState(false)

useEffect(() => {
  function checkUserData() {
    setCard(localStorage.length)

  }

  window.addEventListener('storage', checkUserData)


  return () => {
    window.removeEventListener('storage', checkUserData)
  }
}, [])

const showdetails=()=>{
    setIsDetailsVisible(true)}
const closedetails=()=>{setIsDetailsVisible(false)}

    return(
    <div>
       
        <div onClick={showdetails} className={styles.basketLogo} > logoKoszyk {cart}</div>
        {isDetailsVisible && <BasketDetails handleClose={closedetails} />}
        </div>
    )
    
}

export default Basket
