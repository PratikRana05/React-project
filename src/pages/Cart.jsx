import { useCart } from '../context/CartContext'
import { Link } from 'react-router'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>
        <Link to="/products" className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
          Start Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
      <div className="space-y-6">
        {cart.map(item => (
          <div key={item.id} className="flex gap-6 items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <img src={item.image} alt={item.title} className="w-32 h-32 object-contain" />
            <div className="flex-grow space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-2xl font-bold text-blue-600">${item.price}</p>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                >
                  -
                </button>
                <span className="text-lg font-medium">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>
            <button 
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700 p-2"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl">Total:</span>
          <span className="text-2xl font-bold text-blue-600">${total.toFixed(2)}</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
