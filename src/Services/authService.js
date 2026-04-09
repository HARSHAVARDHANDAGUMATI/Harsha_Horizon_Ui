const AUTH_KEY = 'horizon-user'

const demoUser = {
  id: 'user-1',
  name: 'Harsha',
  email: 'adela@horizon-ui.com',
  role: 'Product Designer',
}

export const authService = {
  getCurrentUser() {
    const savedUser = localStorage.getItem(AUTH_KEY)
    if (!savedUser) {
      return demoUser
    }

    const parsedUser = JSON.parse(savedUser)

    return {
      ...parsedUser,
      name:
        parsedUser.name === 'Adela Ferguson' ? demoUser.name : parsedUser.name,
    }
  },
  persistUser(user) {
    if (!user) {
      localStorage.removeItem(AUTH_KEY)
      return
    }

    localStorage.setItem(AUTH_KEY, JSON.stringify(user))
  },
  async login({ email }) {
    return Promise.resolve({
      ...demoUser,
      email,
    })
  },
  async register({ name, email }) {
    return Promise.resolve({
      ...demoUser,
      name,
      email,
    })
  },
  logout() {
    localStorage.removeItem(AUTH_KEY)
  },
}
