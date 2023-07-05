import './Login.css';
import logotipo from '../../assets/Logotipo.jpg';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';

const Login = () => {
    const navigate = useNavigate();

    const onLogin = async (e) => {
        e.preventDefault();

        const email = document.getElementById('userEntry').value;
        const password = document.getElementById('passwordEntry').value;

        try {
            // Sign in with email and password
            await signInWithEmailAndPassword(auth, email, password);

            // Navigate to the dashboard page
            navigate('/dashboard', {
                replace: true,
                state: {
                    logged: true,
                },
            });
        } catch (error) {
            // Handle authentication error
            console.error('Error signing in:', error.message);
        }
    };

    return (
        <div className="Login-bg">
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="row w-75 shadow rounded">
                    <div className="col px-1 logo-container rounded-start d-none d-md-block">
                        <div className="container logo">
                            <img src={logotipo} className="img-fluid rounded-circle" alt="" />
                        </div>
                        <h1 className="text-center">&iexcl;Adios reciduos!</h1>
                        <p className="m-4 px-4 fs-5 text-center">
                            Ayudamos a los comercios de alimentos a sustituir sus recipientes desechables por retornables.
                        </p>
                    </div>
                    <div className="col px-4 py-5 bg-white rounded-end">
                        <h2 className="py-5 fw-bold text-center">&iexcl;Bienvenido de vuelta!</h2>
                        <form onSubmit={onLogin}>
                            <div className="mx-2 mb-4">
                                <label htmlFor="userEntry" className="form-label">
                                    Usuario
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="userEntry"
                                    placeholder="Usuario"
                                    required={true} // Add the 'required' attribute to enforce input validation
                                />
                            </div>
                            <div className="mx-2 mb-4">
                                <label htmlFor="passwordEntry" className="form-label">
                                    Contrase&ntilde;a
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="passwordEntry"
                                    placeholder="Contrase&ntilde;a"
                                    required={true} // Add the 'required' attribute to enforce input validation
                                />
                            </div>
                            <div className="mx-2 d-grid">
                                <button type="submit" className="btn bg-button">
                                    Iniciar Sesion
                                </button>
                            </div>
                            <div className="mx-2 my-3">
                                <span>
                                    <a className="link-color" href="inventario">
                                        Recuperar contrase&ntilde;a
                                    </a>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
