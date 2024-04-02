import React from 'react'
import "./burger.css"
const BurgerButton = ({isNavExpanded,handleNavExpanded}) => {
  return (
    <div onClick={handleNavExpanded}
    className={isNavExpanded ? 'burger-icon open' : 'burger-icon'}>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export default BurgerButton
