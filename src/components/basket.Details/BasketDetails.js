import styles from "./BasketDetails.module.scss"
import {useState, useEffect } from "react";

function BasketDetails(props){
    const [items,setItems]=useState(null) 
    useEffect(()=> {
        setItems(Object.values(localStorage))
    }, [])

return(
   <div className={styles.details}> Twoje zamówienie
    {items && items.map((item)=>{
       const itemObject=JSON.parse(item)
       return (
        <div>{itemObject.quantity} - {itemObject.product.title}</div> 
    )})}
    <button className={styles.close} onClick={props.handleClose}> Zwiń</button>
    <button className={styles.buy}>Zamów</button>
 </div>

)

  }



export default BasketDetails