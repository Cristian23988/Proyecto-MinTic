import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import iconCarrito from '../img/icon-carrito.svg';
import api from "../servicios/serviceApi";
const HeaderLogin=({carrito, isLoggedIn, setLogin, setIsAdmin}) =>{
    const history = useHistory();
    carrito = 3;
    const login=(res)=>{
        localStorage.setItem("token", res.tokenId);
        //setTimeout(window.location.reload(), 1000);
        api.Usuarios.getUser().then((res) => {
            setLogin(res.estado_activo);
            if (res.estado_activo) {
                setIsAdmin(res.rol_usu === "Admin");
            } else {
                localStorage.removeItem("token");
            }
        });          
    }
    const logout=()=>{
        setLogin(false); 
        localStorage.removeItem('token');  
        history.push("/");
    }
    if(isLoggedIn){
        return(
            <React.Fragment>
                
                <li className="nav-item">
                    <Link to="/" className="nav-link active">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Ventas" className="nav-link">Gestion de Ventas</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Usuarios" className="nav-link">Gestion de Usuarios</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Productos" className="nav-link">Gestion de productos</Link>
                </li>
                <li className="nav-item" style={{marginLeft:'20px'}}>
                    <Link to="/carrito" className="position-relative">
                        <img src={iconCarrito} alt="..." className="header-icon"></img>
                        <span className="position-absolute top-0 start-80 translate-middle badge rounded-pill bg-danger">
                            {carrito}
                        </span>
                    </Link>
                </li>             
                <li className="nav-item" style={{marginLeft:'50px'}}>
                    <button className="btn btn-outline-danger btn-sm" onClick={ logout }>Salir</button>
                </li>                           
            </React.Fragment>
        );
    }else{
        return(
            <div>            
                <GoogleLogin
                    clientId="882471923244-2s7j8hlt0kftg4qlv00mm5rldl1camul.apps.googleusercontent.com"
                    buttonText="Iniciar sesion"
                    onSuccess={login}
                    onFailure={(err)=>{console.log(err)}}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        );
    }
}

export default HeaderLogin; 