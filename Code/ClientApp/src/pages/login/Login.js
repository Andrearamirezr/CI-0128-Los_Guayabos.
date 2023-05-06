import './Login.css'
import logotipo from '../../assets/Logotipo.jpg'

{ /* Pagina de ingreso a la aplicacion */ }
const Login = () => {
    return (
        <div className="Login-bg">
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="row w-75 shadow rounded">

                    {/* Carta Izquierda: se muestra logo e informacion de la empresa. */}
                    <div className="col px-1 logo-container rounded-start d-none d-md-block">
                        <div className="container logo">
                            <img src={ logotipo } className="img-fluid rounded-circle" alt=""/>
                        </div>
                        <h1 className="text-center">&iexcl;Adios reciduos!</h1>
                        <p className="m-4 px-4 fs-5 text-center">
                            Ayudamos a los comercios de alimentos a sustituir sus
                            recipientes desechables por retornables.
                        </p>
                    </div>

                    {/* Carta derecha: se muestran el formulario para ingresar credenciales de usuario. */}
                    <div className="col px-4 py-5 bg-white rounded-end">
                        <h2 className="py-5 fw-bold text-center">&iexcl;Bienvenido de vuelta!</h2>
                        <form action="#">
                            <div className="mx-2 mb-4">
                                <label for="userEntry" className="form-label">Usuario</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="userEntry"
                                    placeholder="Usuario">
                                </input>
                            </div>
                            <div className="mx-2 mb-4">
                                <label for="passwordEntry" className="form-label">Contrase&ntilde;a</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="passwordEntry"
                                    placeholder="Contrase&ntilde;a">
                                </input>
                            </div>
                            <div className="mx-2 d-grid">
                                <button type="submit" className="btn bg-button">Iniciar Sesion</button>
                            </div>
                            <div class="mx-2 my-3">
                                <span><a className="link-color" href="inventario">Recuperar contrase&ntilde;a</a></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;