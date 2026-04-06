import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('gamehub-theme')
    return storedTheme ? storedTheme === 'dark' : true
  })

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode ? 'dark' : 'light',
    )
    localStorage.setItem('gamehub-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <HomePage
      isDarkMode={isDarkMode}
      onToggleTheme={() => setIsDarkMode((current) => !current)}
    />
  )
}

export default App
