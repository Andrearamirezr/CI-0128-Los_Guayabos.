import './AppBar.css'
import React, { useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import logotipo from '../assets/Logotipo.png'
import { FaUserAlt, FaClipboardList } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { RiBillFill } from "react-icons/ri"


const AppBar = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [parent_class, setParentClass] = useState("col d-none")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("col-2 menu")
            setParentClass("col-2 parent")

        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("col d-none")
            setParentClass("col d-none")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <nav className="navBar {/*fixed-top*/}">
                <div className="row m-0">
                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                    </div>
                    <img src={logotipo} className="img-fluid nbLogo" alt="" />
                </div>

            </nav>

            <div className="row m-0">
                <div className={parent_class}>
                    <div className={menu_class}>
                        <ul>
                            <li className="my-3">
                                <Link className="sb-link" to="dashboard">  <MdDashboard /> Dashboard</Link>
                            </li>
                            <li className="my-3">
                                <Link className="sb-link" to="inventario"> <FaClipboardList /> Inventario</Link>
                            </li>
                            <li className="my-3">
                                <Link className="sb-link" to="clientes"> <FaUserAlt /> Clientes</Link>
                            </li>
                            <li>
                                <Link className="sb-link" to="ordenes"> <RiBillFill /> Ordenes</Link>
                            </li>
                            {/*<li>
                                <Link className="sb-link" to="agenda"> <FaClipboardList /> Agenda</Link>
                            </li>*/}
                        </ul>
                    </div>

                </div>
                <div className="col p-0">
                    <Outlet />
                </div>
                
            </div>
            
        </div>
    )
}

export default AppBar;