import Intro from "../../components/Intro/Intro";
// import Basket from "../../components/basket/Basket";
import Delivery from "../../components/delivery/Delivery";
import Dishes from "../dishes/Dishes";
import More from "../../components/more/More"
import Sweet from "../../components/sweet/Sweet";
import Footer from "../../components/footer/Footer"


function Home() {
    return (
      <div>
       
        <Intro />
        <Delivery />
        <More />
        <Dishes />
        <Sweet />
        <Footer />
      </div>
 
    );
  }

  export default Home