import { Routes, Route } from 'react-router-dom'
import Login from '../pages/login/Login'
import Layout from '../pages/Layout';
import Dashboard from '../pages/dashboard/Dashboard'
import Inventario from '../pages/inventario/Inventario'
import AgregarProducto from '../pages/inventario/AgregarProducto';

{ /* Componente para controlar la navegacion con rutas */ }
const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="inventario" element={<Inventario />} />
                    <Route path="inventario/agregar" element={<AgregarProducto />} />
                    { /*<Route path="clientes" element={<Clientes />} />*/}
                    { /*<Route path="agenda" element={<Agenda />} />*/}
                </Route>
                <Route path="login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default AppRouter;