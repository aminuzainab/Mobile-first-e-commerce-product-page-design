export default function Lightbox({ products,
    slideIndex,
    prevSlide,
    nextSlide,
    setShowLightbox }) {
    return (
        <>
            <article className="bg-black/70 fixed inset-0 z-50">

                <div className="flex items-center justify-center h-screen">
                    <button className="cursor-pointer" onClick={() => setShowLightbox(false)}>
                        <img src="./svg-images/icon-close.svg" alt="icon-close" className="w-5 absolute top-16 right-64" />
                    </button>
                    {products.map((item, index) => (
                        <div key={index} className={slideIndex === index + 1 ? "flex items-center justify-center w-4/5 sm:w-2/3 lg:w-1/3 h-full relative" : "hidden"}>
                            <img src={item.mainImage} alt="" className="block w-full h-auto lg:rounded-2xl" />

                            <ul>
                                <button onClick={prevSlide} className="bg-white rounded-full top-1/2 p-3 absolute left-4 -translate-y-1/2 cursor-pointer"><img src="./svg-images/icon-previous.svg" alt="" /></button>
                            </ul>
                            <ul>
                                <button onClick={nextSlide} className="bg-white rounded-full top-1/2 p-3 absolute right-4 -translate-y-1/2 cursor-pointer"><img src="./svg-images/icon-next.svg" alt="" /></button>
                            </ul>
                        </div>
                    ))}
                </div>
            </article>
        </>
    )
}
