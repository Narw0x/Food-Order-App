import Modal from "./UI/Modal";
import Button from "./UI/Button";

import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

    function handleCloseCart(){
        userProgressCtx.hideCart();
    }

    function handleGoToCheckout(){
        userProgressCtx.showCheckout();
    }

    return(
        <Modal className="cart" open={userProgressCtx.progress === 'cart'} onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map (item => {
                    return(
                        <CartItem key={item.id} item={item} onIncrease={() => cartCtx.addToCart(item)} onDecrease={()=> cartCtx.removeFromCart(item.id)}/>
                    )
                    
                })}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                {cartCtx.items.length > 0 && <Button onClick={handleGoToCheckout}>Go to Checkout</Button> }
            </p>
        </Modal>
    )
}