import { useState } from "react"
import Header from "./Components/header"
import Lightbox from "./Components/lightbox"
import "./index.css"
import { data } from "./data";

function App() {
  const [products] = useState(data)
  const [value, setValue] = useState(0)
  const [amount, setAmount] = useState(0)
  const [slideIndex, setSlideIndex] = useState(1)
  const [showLightbox, setShowLightbox] = useState(false)

  const { mainImage } = products[value]

  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === products.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1)
      setSlideIndex(products.length)
  }

  const decrease = () => {
    setAmount(amount - 1)
    if (amount < 1) setAmount(0);
  };

  return (
    <>
      <Header />
      {showLightbox && (
        <Lightbox
          products={products}
          slideIndex={slideIndex}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          setShowLightbox={setShowLightbox}

        />
      )}


      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:py-10 lg:mt-10 lg:place-items-center">
        <article>
          <div className="lg:hidden">
            {products.map((item, index) => (
              <div key={index} className={slideIndex === index + 1 ? "relative" : "hidden"}>
                <img
                  src={item.mainImage}
                  alt=""
                  className="w-full lg:rounded-2xl cursor-pointer"
                  onClick={() => setShowLightbox(true)} />

                <ul><button onClick={prevSlide} className="bg-white rounded-full top-1/2 p-3 absolute left-4 -translate-y-1/2 pointer"><img src="./svg-images/icon-previous.svg" alt="" /></button></ul>
                <ul><button onClick={nextSlide} className="bg-white rounded-full top-1/2 p-3 absolute right-4 -translate-y-1/2"><img src="./svg-images/icon-next.svg" alt="" /></button></ul>
              </div>

            ))}
          </div>

          <div className="hidden lg:block">
            <img
              src={mainImage}
              alt="main-Image"
              className="w-full lg:rounded-2xl cursor-pointer"
              onClick={() => setShowLightbox(true)}
            />
          </div>

          <ul className="hidden lg:flex items-center justify-start gap-3 flex-wrap mt-5">
            {products.map((item, index) => (
              <li key={item.id} onClick={() => setValue(index)}

                className={
                  `${index === value && "border-2 border-orange-400 opacity-80"} border-2 border-transparent rounded-xl overflow-Hidden cursor-pointer`
                }

              ><img src={item.thumbnail} alt="" className='w-20 rounded-xl' /></li>
            ))}
          </ul>
        </article>

        <article className="px-8 pb-10">
          <h2 className="text-slate-600 py-1 text-sm inline-block tracking-wide uppercase font-bold">Sneaker Company</h2>
          <h1 className="text-slate-900 font-bold mb-3 text-2xl lg:text-4xl">Fall Limited Edition Sneakers</h1>
          <p className="text-slate-500 mb-5 leading-relaxed">These low-profile sneakers are your perfect casual wear companion. Featuring a
            durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>

          <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2 ">
            <ul className="flex items-center gap-5">
              <li className="text-slate-900 font-bold text-xl">$125.00 </li>
              <li className="bg-black text-white py-1 px-2 text-center text-sm tracking-wide inline-block font-bold rounded shadow">50%</li>
            </ul>

            <p className="text-slate-700 text-sm"><s>$250.00</s></p>

          </div>

          <div className="mt-10 lg:flex items-center">
            <ul className="flex items-center bg-slate-100 justify-between py-2 px-4 rounded shadow lg:flex-1">
              <li onClick={decrease} className="cursor-pointer"><img src="./svg-images/icon-minus.svg" alt="" /></li>
              <li>{amount}</li>
              <li onClick={() => setAmount(amount + 1)} className="cursor-pointer"><img src="./svg-images/icon-plus.svg" alt="" /></li>
            </ul>

            <div className="lg:flex-1">
              <button className=
                "flex justify-center gap-4 py-2 px-4 items-center mt-5 font-bold bg-orange-500 transition-all duration-200 rounded-lg lg:mt-0 hover:bg-orange-300 cursor-pointer shadow w-full"><img src="./svg-images/icon-cart.svg" alt="cart" />
                Add to cart
              </button>
            </div>

          </div>

        </article>

      </section >



    </>

  );
}

export default App