import { useState } from 'react'
import { useNavigate, Link } from 'react-router'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add login logic here
    navigate('/products')
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={e => setFormData({...formData, password: e.target.value})}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link>
      </p>
    </div>
  )
}

export default Login
