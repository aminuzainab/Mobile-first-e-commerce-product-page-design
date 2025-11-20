import React, { useState } from 'react'
import Cart from "./cart"


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCart,setOpenCart] = useState(false)
  
  return (
    <>
      <header className="relative flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
        <div className="flex items-center justify-start gap-6">
          <ul className="flex items-center justify-between gap-4">
            {!isOpen && (<li onClick={() => setIsOpen(true)} className="lg:hidden">
              <img className="cursor-pointer" src="/svg-images/icon-menu.svg" alt="menu" />
            </li>)}

            {isOpen && <li onClick={() => setIsOpen(false)} className="lg:hidden close w-6">
              <img className="cursor-pointer" src="/svg-images/icon-close.svg" alt="close" />
            </li>}
            <li>
              <img src="/svg-images/logo.svg" alt="logo" />
            </li>
          </ul>
          
          <nav className= {isOpen && "open"}>
            <ul className="flex items-center justify-start gap-6">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      

       <div>
         <ul className="flex items-center justify-start gap-8">
            <li>
              <button onClick={() => setOpenCart(!openCart)}>
               <img src="/svg-images/icon-cart.svg" alt="cart" className="cursor-pointer" />
              </button>
            </li>
            <li>
              {openCart && <Cart />}
            </li>
            <li>
              <img src="/svg-images/image-avatar.png" alt="avatar" className="w-12"/>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header