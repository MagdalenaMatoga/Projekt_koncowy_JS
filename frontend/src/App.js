import React, {useState} from "react"
import { Routes, Route, Link, } from "react-router-dom";
import Home from "./pages/home/Home"
import Dishes from "./pages/dishes/Dishes";
import Order from "./pages/order/Order";
import Basket from "./components/basket/Basket";
import '../../frontend/src/components/fonts/Fonts.modules.scss'

//CartContext.Provider> - dostarcza kontekst CartContext do komponentów podrzędnych, umożliwiając im dostęp do stanu koszyka i funkcji jego aktualizacji.

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
                        <Link className="link"to="/dishes">Dania</Link>
                    </li>
                    <li className="navElement">
                        <Link className="link"to="/order">Kontakt</Link>
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