import styles from './Intro.module.scss'


function Intro() {
    return (
       
      <div className={styles.introsection}> 
      <div className={styles.text}>
               <h3 className={styles.introHeader}>Zdrowe<br/> posiłki</h3>
            <h1 className={styles.subheader}>Świeże<br/> składniki
            </h1>
            </div>

      
      </div>

    );
  }

  export default Intro