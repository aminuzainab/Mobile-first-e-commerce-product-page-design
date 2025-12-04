import { useState } from "react"
import { data } from "../data"

export default function Lightbox({ products,
    slideIndex,
    prevSlide,
    nextSlide,
    setShowLightbox }) {
    const [value, setValue] = useState(0);
    const { mainImage } = products[value]

    return (
        <>
            <article className="bg-black/70 fixed inset-0 z-50 flex items-center justify-center">
                <div className="relative">
                    <button className="cursor-pointer absolute -top-16 right-0 z-10" onClick={() => setShowLightbox(false)}>
                        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" className="fill-orange-300 hover:fill-orange-400" fill-rule="evenodd" /></svg>
                    </button>

                    <div className="flex items-center justify-center w-4/5 sm:w-2/3 lg:w-96 relative">
                        <img src={mainImage} alt="" className="block w-full h-auto lg:rounded-2xl" />

                        <button onClick={() => setValue(value === 0 ? products.length - 1 : value - 1)} className="bg-white rounded-full top-1/2 p-3 absolute left-4 -translate-y-1/2 cursor-pointer"
                        ><img src="./svg-images/icon-previous.svg" alt="" /></button>
                        <button onClick={() => setValue(value === products.length - 1 ? 0 : value + 1)} className="bg-white rounded-full top-1/2 p-3 absolute right-4 -translate-y-1/2 cursor-pointer
                    "><img src="./svg-images/icon-next.svg" alt="" /></button>
                    </div>

                    <ul className="hidden lg:flex items-center justify-center gap-3 flex-wrap mt-5">
                        {products.map((item, index) => (
                            <li key={item.id} onClick={() => setValue(index)}
                                className={
                                    `${index === value && "border-2 border-orange-400 opacity-80"} border-2 border-transparent rounded-xl overflow-hidden cursor-pointer`
                                }
                            ><img src={item.thumbnail} alt="" className='w-20 rounded-xl' /></li>
                        ))}
                    </ul>
                </div>
            </article>
        </>
    )
}
