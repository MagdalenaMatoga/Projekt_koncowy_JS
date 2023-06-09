import DishCard from '../../components/dishcard/DishCard';
import styles from '../../components/dishcard/DishCard.module.scss'
import axios from 'axios';
import { useState, useEffect } from "react";




function Dishes() {
  const [data, setData] = useState(null);
  useEffect(()=>{
    axios.get('http://localhost:3000/dishes')  //useEffect z funkcją zwrotną, która zostanie wywołana po renderowaniu komponentu. Wewnątrz funkcji zwrotnej wywoływane jest zapytanie HTTP GET do adresu http://localhost:3000/dishes za pomocą biblioteki Axios. Gdy odpowiedź z serwera zostanie zwrócona, funkcja setData jest wywoływana z danymi z odpowiedzi, aby zaktualizować stan data.
    .then(function (response) {
      // handle success
      // console.log(response.data);
      setData(response.data);
    })
  },[]) //[]odpal się tylko jak pojawi się pierwszy raz, wywołana tylko raz przy montowania komponentu


  //jeżeli istenieje jedno i drugie to zwróc to drugie

    return (

      data && <div> 
        <h2 className={styles.dishTitle}>Nasze dania</h2>

        <div className={styles.dishList}>
        <DishCard cardData={data[0]} />
        <DishCard cardData={data[1]} />
        <DishCard cardData={data[2]} />
        <DishCard cardData={data[3]} />
        <DishCard cardData={data[4]} />
        <DishCard cardData={data[5]} />
        <DishCard cardData={data[6]} />
        <DishCard cardData={data[7]} />
        <DishCard cardData={data[8]} />
        <DishCard cardData={data[9]} />
        <DishCard cardData={data[10]} />
        <DishCard cardData={data[11]} />
      
      
       
        </div>
     
      </div>
      
    );
  }

  export default Dishes