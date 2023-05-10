import './Clientes.css'
import { useNavigate } from 'react-router-dom'
import CardDisplay from './components/CardDisplay'

{ /* Pagina principal para mostrar los clientes*/ }
const Clientes = () => {
    const navigate = useNavigate();

    const agregarCliente = e => {
        e.preventDefault();
        navigate('agregar');
    };
    return (
        <div className="container-fluid bg-client">
            { /* Encabezado */}
            <div className="row my-4 px-4">

                { /* Barra de busqueda */}
                <div className="col-4">
                    <div class="input-group">
                        <input type="search" id="searchBar" class="form-control" placeholder="Buscar cliente" />
                        <button className="btn btn-color">Icon</button>
                    </div>
                </div>

                { /* Boton de filtros */}
                <div className="col">
                    <div className="dropdown">
                        <button class="btn btn-color dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true">Ordenar por</button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Categoria</a></li>
                            <li><a class="dropdown-item" href="#">Color</a></li>
                            <li><a class="dropdown-item" href="#">Descripcion</a></li>
                        </ul>
                    </div>
                </div>

                { /* Boton para agregar nuevo producto */}
                <div className="col-2 col-lg-1 mx-5">
                    <div className="button-group">
                        <button onClick={agregarCliente} className="btn btn-color">Agregar cliente</button>
                    </div>
                </div>
            </div>
            <CardDisplay />
        </div>

    );
}

export default Clientes;