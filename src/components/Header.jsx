import { useContext } from 'react';
import logo from '../assets/logo.jpg';

import Button from './UI/Button';

import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

export default function Header() {

    const CartCtx = useContext(CartContext);
    const UserProgressCtx = useContext(UserProgressContext);

    function handleShowCart(){
        UserProgressCtx.showCart()
    }


    const totalCartItems = CartCtx.items.reduce((acc, item) => acc + item.quantity, 0);

    return(
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="A restaurant logo" />
                <h1>React Food </h1>
            </div>
           <nav>
            <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
           </nav>
        </header>
    )

};