import React from "react";
import home from "../shared/home";
import Login from '../components/Login';
import AgregarVenta from '../ventas/components/AgregarVentas';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Lista_Productos from '../producto/componente/lista-productos';
import AgregarUsuario from "../Usuarios/component/AgregarUsuarios";
import AgregarProduct from '../producto/componente/AgregarProducto';
import UpdateVentas from '../ventas/components/UpdateVentas';
import UpdateVend from "../Usuarios/component/UpdateVend";
import UpdateProd from "../producto/componente/UpdateProd";
import PrivateRoute from "../components/PrivateRoute"
class App extends React.Component{
     
render(){
return(
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={home} />
    <Route exact path="/login" component={Login}/>
    <Route path="/listaProducts" component={Lista_Productos} />
    <PrivateRoute path="/Productos"  >
        <AgregarProduct />
    </PrivateRoute>
    <Route path="/Usuarios" component={AgregarUsuario} />
    <Route path="/updateVentas" component={UpdateVentas} />
    <Route path="/updateProd" component={UpdateProd} />
    <Route path="/UpdateVend" component={UpdateVend} />
    <Route path="/Ventas" component={AgregarVenta} products={this.props.store} />
    </Switch>
    </BrowserRouter>
);

}
}
export default App