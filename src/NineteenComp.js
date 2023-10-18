import React from 'react'
import { useTheme } from './ThemeContext'
import './styles/Nineteen.css'

export default function NineteenComp() {
    const {isDarkMode} = useTheme();
    const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';

  return (
    <div className={`container ${themeClass}`}>
      <p>This component uses selected theme</p>
    </div>
  )
}
