import { Outlet, Link } from "react-router-dom";
import './Layout.css'
import AppBar from '../components/AppBar'
import logotipo from '../assets/Logotipo.png'

{ /* Layout para contener las distintas paginas de la aplicacion y poder navegar entre ellas. */ }
const Layout = () => {
    return (
        <div>
            { /* Barra de Navegacion */}
            <AppBar />
            { /* Contenedor de las paginas */}
            {/**<Outlet/>*/}
        </div>
    );
}

export default Layout;