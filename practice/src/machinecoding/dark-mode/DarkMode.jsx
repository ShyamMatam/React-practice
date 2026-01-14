import React, {useState} from 'react'

const DarkMode = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

  return (
    <div>
      <div className={`container ${isDarkMode ? "dark-mode" : "light-mode"}`}> 
        <h1>dark mode Toggle</h1>
        <input type="checkbox" value={isDarkMode} onChange={toggleTheme}/>
      </div>
    </div>
  )
}

export default DarkMode
