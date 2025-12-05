import React, { useState } from 'react'
import { useCart } from "./cartContext"
import Cart from "./cart"



function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isCartOpen, toggleCart, items } = useCart();
  const totalItems = items.reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <>
      <header className="relative flex items-center justify-between p-0 border-b border-slate-400 max-w-7xl mx-auto">
        <div id='nav-link' className="flex items-center justify-start gap-0">
          <ul className="flex items-center justify-between gap-0 ">
            {!isOpen && (<li onClick={() => setIsOpen(true)} className="lg:hidden">
              <img className="cursor-pointer" src="./svg-images/icon-menu.svg" alt="menu" />
            </li>)}

            {isOpen && <li onClick={() => setIsOpen(false)} className="lg:hidden close w-6">
              <img className="cursor-pointer" src="./svg-images/icon-close.svg" alt="close" />
            </li>}
            <li className='cursor-pointer ml-4 lg:mr-10 ml-0'>
              <img src="./svg-images/logo.svg" alt="logo" />
            </li>
          </ul>
          <nav className={isOpen ? "open" : ""}>
            <ul className="flex items-center justify-start gap-0">
              <li className='hover:border-b hover:border-orange-300 py-6'><a href="#">Collections</a></li>
              <li className='hover:border-b hover:border-orange-300 py-6'><a href="#">Men</a></li>
              <li className='hover:border-b hover:border-orange-300 py-6'><a href="#">Women</a></li>
              <li className='hover:border-b hover:border-orange-300 py-6'><a href="#">About</a></li>
              <li className='hover:border-b hover:border-orange-300 py-6'><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>


        <div>
          <ul className="flex items-center justify-start gap-8">
            <li className="relative">
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
              <button onClick={toggleCart}>
                <img src="./svg-images/icon-cart.svg" alt="cart" className="cursor-pointer" />
              </button>
            </li>
            <li>
              {isCartOpen && <Cart />}
            </li>
            <li className="cursor-pointer hover:border-4 border-orange-300 hover:rounded-full">
              <img src="./svg-images/image-avatar.png" alt="avatar" className="w-12" />
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header