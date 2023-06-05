import React, {useState} from "react"
import { Routes, Route, Link, } from "react-router-dom";
import Home from "./pages/home/Home"
import Dishes from "./pages/dishes/Dishes";
import Order from "./pages/order/Order";
import Basket from "./components/basket/Basket";
import '../../frontend/src/components/fonts/Fonts.modules.scss'

export const CartContext = React.createContext([
    {},
    p => {}
]);

function App() {
    const [cart, setCart] = useState({});

    return (
        <div>
            <CartContext.Provider value={[cart, setCart]}>
            <div className="header">
                <ul className="mainMenu">
                    <li className="navElement">
                        <Link className="link" to="/">Home</Link>
                    </li >
                    <li className="navElement">
                        <Link className="link"to="/dishes">Dishes</Link>
                    </li>
                    <li className="navElement">
                        <Link className="link"to="/order">Order</Link>
                    </li>
                </ul>
                <Basket/>
            </div>

            <Routes>
                <Route index element={<Home />} />
                <Route path="/dishes" element={<Dishes />} />
                <Route path="/order" element={<Order />} />
            </Routes>
            </CartContext.Provider>
        </div>
    );
}

export default App;