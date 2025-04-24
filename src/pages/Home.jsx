import { Link } from 'react-router'

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to EShop</h1>
      <p className="text-lg mb-8">Discover amazing products at great prices</p>
      <Link to="/products" className="btn-primary">
        Shop Now
      </Link>
    </div>
  )
}

export default Home
