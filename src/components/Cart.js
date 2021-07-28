import React from 'react';
import Item from './Item';
import { clearCart, itemRemoved } from '../redux/cartSlide';
import { useDispatch } from 'react-redux';

const Cart = (props) => {
    const {items, onClean} = props;
    const selectedItems = items.filter( item => item.amount > 0);
    const prices = items.map(item => item.price*item.amount);
    const totalToPay = prices.reduce((acc, cv) => acc + cv);
    const dispatch = useDispatch();

    const cleanItems = (e) => {
        e.preventDefault();
        onClean();
        dispatch(clearCart())

    }

    const payItems = (e) => {
        if(totalToPay > 0){
            alert('Thanks for your purchase!');
            cleanItems(e);
        }
    }

    const removeitem = (id) => {
        dispatch(itemRemoved({ id }))
    }

    return(
        <div className="cart">
            <div className="cart__options">
                <h3>Total to pay: US$ {totalToPay}</h3>
                <button onClick={payItems}>Pay</button>
                <button onClick={cleanItems}>Clean</button>
            </div>
            <div className="cart__items">
                {selectedItems.map(item =>{
                    return (
                        <div key={item.id} className="cart-item">
                            <Item item={item}/>
                            <h3>Amount: {item.amount}</h3>
                            <h3>Total price: US$ {item.price*item.amount}</h3>
                            <button onClick={() => removeitem(item.id)}>
                                Remove
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart;