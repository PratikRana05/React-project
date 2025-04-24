const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EShop</h3>
            <p>Your one-stop shop for all your needs</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/products">Products</a></li>
              <li><a href="/cart">Cart</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p>Email: support@eshop.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p>&copy; 2024 EShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
