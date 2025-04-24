import { Link } from 'react-router'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const { cart } = useCart()
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">EShop</Link>
          <div className="flex items-center space-x-6">
            <Link to="/products" className="hover:text-gray-300">Products</Link>
            <Link to="/cart" className="relative">
              <FaShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <Link to="/login" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
