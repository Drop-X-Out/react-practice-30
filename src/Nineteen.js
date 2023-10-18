import React from 'react'
import { useTheme } from './ThemeContext'

export default function Nineteen() {

    const {isDarkMode,toggleTheme} = useTheme();

  return (
    <div>
      <label>
        <input type='checkbox' checked={isDarkMode} onChange={toggleTheme}/>
        Dark Mode
      </label>
    </div>
  )
}
