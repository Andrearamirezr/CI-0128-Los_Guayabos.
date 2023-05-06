import { Routes, Route } from 'react-router-dom'
import Login from '../pages/login/Login'
import Inventario from '../pages/inventario/Inventario'
import Layout from '../pages/Layout';

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </div>
    );
}

export default AppRouter;