import { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/theme.context'

const Footer = () => {

    const { theme } = useContext(ThemeContext)

    const themeStyle = {
        backgroundColor: theme === 'light' ? 'black' : 'white',
        color: theme === 'light' ? 'white' : 'black',
    }

    return (
        <footer style={themeStyle}> Todos los derechos reservados | Tema activo: {theme}</footer>
    )
}

export default Footer