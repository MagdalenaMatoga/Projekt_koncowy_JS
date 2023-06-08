import styles from './Footer.module.scss'
import twitter from './Twitter.svg'
import facebook from './Facebook.svg'


function Footer() {
    return (
       
      <div className={styles.introsection}> 
      <footer className={styles.footer}>
  <div className={styles.footerContainer}>
    <div className={styles.footerInfo}>
      <a href="/" className={styles.logo}>GreenEats</a>
      <span className={styles.footerCopy}>© 2023, All Rights Reserved</span>
    </div>
    <div className={styles.footerIcons}>
    <img className={styles.imaget} src={twitter} alt="Twitter"></img>
    <img className={styles.imagef} src={facebook} alt="Facebook"></img>
    </div>
  </div>
</footer>
    
      
      </div>

    );
  }

  export default Footer

