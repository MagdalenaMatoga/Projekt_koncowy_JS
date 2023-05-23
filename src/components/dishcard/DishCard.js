import styles from './DishCard.module.scss'
import img from './images/spaghetti.jpg'

function DishCard() {
    return (

      <div className={styles.card}>
        <h4 className={styles.title}>Spaghetti bolognese</h4>
        <img className={styles.image} alt="" src={img}></img>
        <p className={styles.text}>Podstawą dobrego spaghetti bolognese jest prawidłowo przyrządzony sos boloński. Jakość użytych składników i staranność jego wykonania przekłada się na efekt końcowy. Idealny sos boloński powinien dosłownie rozpływać się w ustach i mieć jednolitą, emulsyjną strukturę powstałą z długiego gotowania. </p>

        <a href="/" className="">more</a>
      </div>

    );
  }

  export default DishCard