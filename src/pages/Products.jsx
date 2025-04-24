import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { useCart } from '../context/CartContext'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { addToCart } = useCart()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <Link to={`/product/${product.id}`}>
            <div className="p-4 h-64 flex items-center justify-center bg-gray-50">
              <img src={product.image} alt={product.title} className="h-full object-contain hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg leading-tight mb-2 text-gray-800">{product.title}</h3>
              <p className="text-xl font-bold text-blue-600">${product.price}</p>
            </div>
          </Link>
          <div className="px-5 pb-5">
            <button 
              onClick={() => addToCart(product)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products
