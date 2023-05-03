import './Inventario.css'

function Inventario() {
    return (
        <div className="container-fluid bg-inv min-vh-100">
            // barra de navegacion
            <div className="row my-4 px-4">
                <div className="col-4">
                    <div class="input-group">
                        <input type="search" id="searchBar" class="form-control" placeholder="Buscar producto"/>
                        <button type="submit" className="btn btn-color">Icon</button>
                    </div>
                </div>
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
                <div className="col-2 col-lg-1 mx-5">
                    <div className="button-group">
                        <button type="submit" className="btn btn-color">Agregar producto</button>
                    </div>
                </div>
            </div>
            <div className="table-responsive mx-3 rounded-4 text-center">
                <table className="table table-color">
                    <thead className="th-color">
                        <tr>
                            <th scope="col">SKU</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Peso (g)</th>
                            <th scope="col">Color</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Disponibles</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">EC-07-1-JA</th>
                            <td>Sopa</td>
                            <td>Sopa pequena</td>
                            <td>-</td>
                            <td>JA</td>
                            <td>1500</td>
                            <td>750</td>
                        </tr>
                        <tr>
                            <th scope="row">EC-08-1-JA</th>
                            <td>Sin division</td>
                            <td>Sin compartimientos pequeno</td>
                            <td>-</td>
                            <td>JA</td>
                            <td>1250</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <th scope="row">EC-10-1-JA</th>
                            <td>Sin division</td>
                            <td>Sin compartimientos tapa regular</td>
                            <td>-</td>
                            <td>JA</td>
                            <td>1000</td>
                            <td>700</td>
                        </tr>
                        <tr>
                            <th scope="row">M-212-RJ</th>
                            <td>Vaso</td>
                            <td>Vaso 400mL</td>
                            <td>45,6</td>
                            <td>BL</td>
                            <td>2200</td>
                            <td>230</td>
                        </tr>
                        <tr>
                            <th scope="row">M-271-RJ</th>
                            <td>Plato</td>
                            <td>Plato redondo ensalada</td>
                            <td>55,8</td>
                            <td>RJ</td>
                            <td>1500</td>
                            <td>550</td>
                        </tr>
                        <tr>
                            <th scope="row">M-273-BL</th>
                            <td>Plato</td>
                            <td>Plato redondo principal</td>
                            <td>80,45</td>
                            <td>BL</td>
                            <td>2200</td>
                            <td>157</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    );
}

export default Inventario;