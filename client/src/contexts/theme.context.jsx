import { createContext, useState } from "react"

const ThemeContext = createContext()

function ThemeProviderWrapper(props) {

    const [theme, setTheme] = useState('light')
    const [invertedTheme, setInvertedTheme] = useState('dark')

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
        invertedTheme === 'light' ? setInvertedTheme('dark') : setInvertedTheme('light')
    }

    return (
        <ThemeContext.Provider value={{ theme, invertedTheme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProviderWrapper }