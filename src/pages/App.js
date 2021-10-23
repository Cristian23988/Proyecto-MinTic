import React, {useState, useEffect} from "react";
import home from "../shared/home";
import AgregarVenta from '../ventas/components/AgregarVentas';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Lista_Productos from '../producto/componente/lista-productos';
import AgregarUsuario from "../Usuarios/component/AgregarUsuarios";
import AgregarProduct from '../producto/componente/AgregarProducto';
import UpdateVentas from '../ventas/components/UpdateVentas';
import UpdateUsu from "../Usuarios/component/UpdateVend";
import UpdateProd from "../producto/componente/UpdateProd";
import PrivateRoute from "../components/PrivateRoute";
import PrivateRouteAdmin from "../components/PrivateRouteAdmin";
import Header from "../components/Header";
import api from "../servicios/serviceApi";
function App(){  
    const [loggIn, setLoggIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(true);
    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchData = async () => {
            const validRol = await api.Usuarios.validarAdmin();
            setIsAdmin(validRol);
        };
        if (token === null) {
           setLoggIn(false);
        } else {        
            fetchData();
            setLoggIn(true);                                      
        }      
    }, []);
    return(
        <Router>
        <Header 
            isLoggedIn={loggIn}
            login={setLoggIn}
            setIsAdmin={setIsAdmin}
        />
        <Switch>
        <Route exact path="/" component={home} />
        <Route path="/listaProducts" component={Lista_Productos} />
        <PrivateRouteAdmin   path="/Productos" isAdmin={isAdmin} exact >
            <AgregarProduct />
        </PrivateRouteAdmin>
        <PrivateRouteAdmin  path="/Usuarios" isAdmin={isAdmin} exact>
            <AgregarUsuario/>
        </PrivateRouteAdmin>
        <Route  path="/updateVentas" component={UpdateVentas}  />
        
        <Route  path="/updateProd" component={UpdateProd} />

        <Route  path="/UpdateVend" component={UpdateUsu} /> 
        <PrivateRoute  path="/Ventas" exact >
            <AgregarVenta/>
        </PrivateRoute>
        </Switch>
        </Router>
    );
}
export default App