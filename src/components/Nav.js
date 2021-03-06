import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.png";

const Nav = (props) =>{
    const {amount} = props;

    return (
        <div className="NavDiv">
            <div>
                <Link to='/shopping-cart'>
                    <h1>Home</h1>
                </Link>
            </div>
            <div className="Options">
                <ul>
                    <Link to='/shopping-cart/cart'>
                        <li>Cart</li>
                    </Link>
                    <Link to='/shopping-cart/catalog'>
                        <li>Catalog</li>
                    </Link>
                </ul>
                <div id="CartIconDiv">
                    <img src={CartIcon} alt="Cart"/>
                    <p id='AmountInCart'>{amount}</p>
                </div>
            </div>
        </div>
    )
}

export default Nav;