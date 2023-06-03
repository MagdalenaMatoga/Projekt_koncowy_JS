import Intro from "../../components/Intro/Intro";
import Delivery from "../../components/delivery/Delivery";
import Dishes from "../dishes/Dishes";
import More from "../../components/more/More"
import Basket from "../../components/basket/Basket"
import Sweet from "../../components/sweet/Sweet"


function Home() {
    return (
     
      <div>
        <h2> Home </h2>
        <Basket />
        <Intro />
        <Delivery />
        <More />
        <Dishes />
        <Sweet />
       
        
      </div>
 
    );
  }

  export default Home