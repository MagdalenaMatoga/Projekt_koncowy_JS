import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import Dishes from "./pages/dishes/Dishes";
import Order from "./pages/order/Order";
import Basket from "./components/basket/Basket";
import '../../frontend/src/components/fonts/Fonts.modules.scss'
import Header from "./components/header/Header"





function App() {
    return (
        <div>
      <Header/>
          <Basket/>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/dishes" element={<Dishes />} />
                <Route path="/order" element={<Order />} />
             
                
            </Routes>
            
        
          
        </div>
    );
}

export default App;