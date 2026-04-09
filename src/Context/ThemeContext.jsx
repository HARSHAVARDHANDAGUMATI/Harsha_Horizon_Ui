import { createContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext(null)

const STORAGE_KEY = 'horizon-theme'

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY)
    if (savedTheme) {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === 'dark',
      toggleTheme: () => {
        setTheme((currentTheme) =>
          currentTheme === 'dark' ? 'light' : 'dark',
        )
      },
    }),
    [theme],
  )

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContext
