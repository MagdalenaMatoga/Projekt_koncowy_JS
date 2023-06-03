import styles from './DishCard.module.scss'



function DishCard(props) {
  const addToCart = () => {
    if (localStorage.getItem(props.cardData.id) === null) {
      localStorage.setItem(props.cardData.id, JSON.stringify({quantity: 1,product:props.cardData}))
      } else {
      const existingItem = JSON.parse(localStorage.getItem(props.cardData.id))
      localStorage.setItem(props.cardData.id, JSON.stringify({quantity: existingItem.quantity + 1, product:props.cardData}))
      }

  }

    return (

      <div className={styles.card} style={{
        display: 'flex', paddingLeft: 30, alignItems:'center'
      }}>
        <h4 className={styles.title}>{props.cardData.title}</h4>
        <img className={styles.image} alt="" src={"/images" + props.cardData.picture}></img>
        <p className={styles.text}>{props.cardData.text} </p>
        <h3 className={styles.price}>{props.cardData.price} </h3>
       
        
        <button onClick={addToCart} className={styles.btn}>Zamów</button>
       
      </div>

    );
  }

  export default DishCard