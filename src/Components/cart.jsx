import thumbnail from "/svg-images/image-product-1-thumbnail.jpg"


const Cart = () => {
    return <>
        <article className="bg-white rounded-2xl shadow-2xl p-8 absolute top-32 right-8 left-8 lg:w-96 lg:left-auto lg:top-20"
         style={
            {zIndex: 1000}
        }>
            <h2 className="font-bold border-b border-slate-400 pb-2 mb-8">Cart</h2>
            <div className="flex items-center justify-between">
                <img src={thumbnail} alt="thumbnail" className="rounded-lg w-14" />
                <ul>
                    <li className="text-slate-500 text-sm">Fall Limited Edition Sneakers</li>
                    <li className="text-slate-500 text-sm">$125.00 X 3 <span className="font-bold text-slate-800">$375.00</span></li>
                </ul>

                <button>
                    <img src="/svg-images/icon-delete.svg" alt="delete" />
                </button>
            </div>
            <button
                className=
                "py-2 px-4 items-center font-bold bg-orange-500 transition-all duration-200 rounded-lg mt-5 hover:bg-orange-300 cursor-pointer shadow w-full">
                Checkout
            </button>

        </article>

    </>
}

export default Cart