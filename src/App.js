import { Routes, Route, Link, } from "react-router-dom";
import Home from "./pages/home/Home"
import Dishes from "./pages/dishes/Dishes";
import Order from "./pages/order/Order";
import Basket from "./components/basket/Basket";




function App() {
    return (
        <div>
          <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dishes">Dishes</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          </ul>
       
            <Routes>
                <Route index element={<Home />} />
                <Route path="/dishes" element={<Dishes />} />
                <Route path="/order" element={<Order />} />
                <Route path="/basket" element={<Basket />} />
                
            </Routes>
            
        
          
        </div>
    );
}

export default App;