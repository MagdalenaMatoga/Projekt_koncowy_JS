import DishCard from '../../components/dishcard/DishCard';
import styles from '../../components/dishcard/DishCard.module.scss'
import axios from 'axios';
import { useState, useEffect } from "react";




function Dishes() {
  const [data, setData] = useState(null);
  useEffect(()=>{
    axios.get('http://localhost:3000/dishes')
    .then(function (response) {
      // handle success
      // console.log(response.data);
      setData(response.data);
    })
  },[]) //[]odpal się tylko jak pojawi się pierwszy raz


  //jeżeli istenieje jedno i drugie to zwróc to drugie

    return (

      data && <div> 
        <h2 className={styles.dishTitle}>Nasze dania</h2>

        <div className={styles.dishList}>
        <DishCard  cardData={data[0]} />
        <DishCard cardData={data[1]} />
        <DishCard cardData={data[2]} />
        <DishCard cardData={data[3]} />
        <DishCard cardData={data[4]} />
        <DishCard cardData={data[5]} />
        <DishCard cardData={data[6]} />
        <DishCard cardData={data[7]} />
        


        </div>
     
      </div>
      
    );
  }

  export default Dishes