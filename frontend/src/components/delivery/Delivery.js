import styles from './Delivery.module.scss'
import logistics from './images/logistics.png'
import house from './images/house.png'
import fast from './images/fast-delivery.png'
import vegetables from './images/vegetables.png'


function Delivery() {
    return (
      <>
      <h2 className={styles.deliveryTitle}>Jak to działa?</h2>
      <div className={styles.deliverySection}> 
      <div className={styles.box} >
        <img className={styles.image} src={house} alt=""></img>
               <h5 className={styles.header}>Wygodny wybór dań</h5>  
               <p className={styles.description}>Oferujemy szeroki wybór dań, które możesz łatwo i wygodnie w zaciszu domowym wybrać spośród naszej bogatej oferty. Zapewniamy różnorodność opcji, abyś mógł zawsze znaleźć coś dla siebie.</p>   

            </div>
            <div className={styles.box} >
        <img className={styles.image} src={vegetables} alt=""></img>
               <h5 className={styles.header}>Przygotowanie świeżych składników</h5>  
               <p className={styles.description}>Nasze dania są przygotowywane z najświeższych składników, które starannie dobieramy. Stawiamy na jakość i dbamy o to, aby każdy składnik był świeży i wysokiej jakości, aby dostarczyć Ci wyjątkowe doznania kulinarne.</p>   

            </div>
            <div className={styles.box} >
        <img className={styles.image} src={logistics} alt=""></img>
               <h5 className={styles.header}>Przygotowanie wysyłki</h5>  
               <p className={styles.description}> Po złożeniu zamówienia, nasz zespół profesjonalistów rozpoczyna proces przygotowania wysyłki. Dbamy o staranne zapakowanie zamówionych składników, aby dotarły do Ciebie w nienaruszonym stanie.</p>   

            </div>
            <div className={styles.box} >
        <img className={styles.image} src={fast} alt=""></img>
               <h5 className={styles.header}>Szybka dostawa</h5>  
               <p className={styles.description}>Gwarantujemy szybką dostawę zamówionych produktów pod wskazany adres. Nasz zespół dostawców działa sprawnie i terminowo, abyś mógł cieszyć się naszymi smakołykami w najkrótszym możliwym czasie.</p>   

            </div>
    
      </div>
      </>

    );
  }

  export default Delivery
