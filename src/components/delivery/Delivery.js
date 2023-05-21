import styles from './Delivery.module.scss'
import car from './images/car.png'
import logistics from './images/logistics.png'
import house from './images/house.png'
import fast from './images/fast-delivery.png'


function Delivery() {
    return (
      <>
      <h2 className={styles.deliveryTitle}>Jak to działa?</h2>
      <div className={styles.deliverySection}> 
      <div className={styles.box} >
        <img className={styles.image} src={car} alt=""></img>
               <h5 className={styles.header}>Lorem Ipsum</h5>  
               <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>   

            </div>
            <div className={styles.box} >
        <img className={styles.image} src={logistics} alt=""></img>
               <h5 className={styles.header}>Lorem Ipsum</h5>  
               <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>   

            </div>
            <div className={styles.box} >
        <img className={styles.image} src={house} alt=""></img>
               <h5 className={styles.header}>Lorem Ipsum</h5>  
               <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>   

            </div>
            <div className={styles.box} >
        <img className={styles.image} src={fast} alt=""></img>
               <h5 className={styles.header}>Lorem Ipsum</h5>  
               <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>   

            </div>
    
      </div>
      </>

    );
  }

  export default Delivery
