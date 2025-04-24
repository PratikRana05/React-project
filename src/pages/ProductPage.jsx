import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useCart } from '../context/CartContext'

const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { addToCart } = useCart()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

  if (!product) return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center">
            <img src={product.image} alt={product.title} className="max-h-[400px] object-contain hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
              <div className="text-3xl font-bold text-blue-600 mb-6">${product.price}</div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{product.description}</p>
            </div>
            <button 
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium w-full md:w-auto"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
