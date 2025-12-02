import { useCart } from "./cartContext";

export default function Cart() {
  const { items: cartItems, removeItem } = useCart();

  return (
    <article
      className="bg-white rounded-2xl shadow-2xl p-8 absolute top-32 right-8 left-8 lg:w-96 lg:left-auto lg:top-20"
      style={{ zIndex: 1000 }}
    >
      <h2 className="font-bold border-b border-slate-400 pb-2 mb-8">
        Cart
      </h2>

      {cartItems.length === 0 && (
        <p className="text-center text-slate-500">Your cart is empty.</p>
      )}

      {cartItems.length > 0 &&
        cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between mb-6">
            <img src={item.thumbnail} alt="thumbnail" className="rounded-lg w-14" />

            <ul>
              <li className="text-slate-500 text-sm">{item.title}</li>
              <li className="text-slate-500 text-sm">
                ${item.price}.00 × {item.quantity}{" "}
                <span className="font-bold text-slate-800">
                  ${item.totalPrice}.00
                </span>
              </li>
            </ul>

            <button onClick={() => removeItem(item.id)}>
              <img src="/svg-images/icon-delete.svg" alt="delete" />
            </button>
          </div>
        ))}

      {cartItems.length > 0 && (
        <button className="py-2 px-4 font-bold bg-orange-500 text-white rounded-lg w-full hover:bg-orange-300">
          Checkout
        </button>
      )}
    </article>
  );
}
