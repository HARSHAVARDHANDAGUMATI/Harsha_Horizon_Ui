import { createContext, useEffect, useMemo, useState } from 'react'
import { authService } from '../Services/authService'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => authService.getCurrentUser())

  useEffect(() => {
    authService.persistUser(user)
  }, [user])

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login: async (credentials) => {
        const nextUser = await authService.login(credentials)
        setUser(nextUser)
        return nextUser
      },
      register: async (details) => {
        const nextUser = await authService.register(details)
        setUser(nextUser)
        return nextUser
      },
      logout: () => {
        authService.logout()
        setUser(null)
      },
    }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext
