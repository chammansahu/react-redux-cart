import React from 'react'
import { useSelector } from 'react-redux';
const NavBar = () => {
    const cartData  = useSelector(store=>store)
    return (
        <div className="nav-bar">
            <h3>NavBar</h3>
            <h3>cart:{cartData.cartCount }</h3>
        </div>
    )
}

export default NavBar
