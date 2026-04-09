import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import AuthContext from '../Context/AuthContext'

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext)
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/auth/sign-in" replace state={{ from: location }} />
  }

  return children
}

export default ProtectedRoute
