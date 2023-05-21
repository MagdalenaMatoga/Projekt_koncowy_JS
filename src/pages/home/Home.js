import Intro from "../../components/Intro/Intro";
import Delivery from "../../components/delivery/Delivery";
import Dishes from "../dishes/Dishes";


function Home() {
    return (
     
      <div>
        <h2> Home </h2>
        <Intro />
        <Delivery />
        <Dishes />
        
      </div>
 
    );
  }

  export default Home