import './usuarios.css';
import iconCliente from '../../img/icon-cliente.png';
import iconProducto from '../../img/icon-producto.png';
import iconVendedor from '../../img/icon-vendedor.png';
import iconIng from '../../img/icon-btn-ingresar.svg';
import ListaUsuarios from './ListaUsuarios';
import React from "react";
import Header from '../../components/Header';
import Alert from '../../components/Alert';

const lista_usuarios = [{
    "id": 1,
    "nombre": "Manuel",
    "apellido":"Diaz",
    "tipo_identificacion":"Cedula",
    "numero_documento":"123512",
    "rol":"Vendendor"
},
{
    "id": 2,
    "nombre": "Juan",
    "apellido":"Perez",
    "tipo_identificacion":"Cedula",
    "numero_documento":"6345323",
    "rol":"administrador"
}
]

class AgregarUsuario extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {},
            alerta: ""
            
        };
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Nombre
        if (!fields["regUsuarioNombre"]) {
            formIsValid = false;
            errors["regUsuarioNombre"] = "Campo obligatorio.";
        }

        if (typeof fields["regUsuarioNombre"] !== "undefined") {
            if (!fields["regUsuarioNombre"].match(/^[a-zA-Z ]+$/)) {
                formIsValid = false;
                errors["regUsuarioNombre"] = "Solo letras.";
            }
        }
        

        //apellido
        if (!fields["regUsuarioApellidos"]) {
            formIsValid = false;
            errors["regUsuarioApellidos"] = "Campo obligatorio.";
        }

        if (typeof fields["regUsuarioApellidos"] !== "undefined") {
            if (!fields["regUsuarioApellidos"].match(/^[a-zA-Z ]+$/)) {
                formIsValid = false;
                errors["regUsuarioApellidos"] = "Solo letras.";
            }
        }

         //tipo_documento
         if (!fields["regUsuarioTipoId"]) {
            formIsValid = false;
            errors["regUsuarioTipoId"] = "Campo obligatorio.";
        }

        if (typeof fields["regUsuarioTipoId"] !== "undefined") {
            if (!fields["regUsuarioTipoId"] != "") {
                formIsValid = false;
                errors["regUsuarioTipoId"] = "Seleccione una opción.";
            }
        }
        
         //documento
         if (!fields["regUsuarioDocumento"]) {
            formIsValid = false;
            errors["regUsuarioDocumento"] = "Campo obligatorio.";
        }

        if (typeof fields["regUsuarioDocumento"] !== "undefined") {
            if (!fields["regUsuarioDocumento"].match(/^[0-9 ]+$/)) {
                formIsValid = false;
                errors["regUsuarioDocumento"] = "Número de documento no válido.";
            }
        }

          //rol
          if (!fields["regUsuarioRol"]) {
            formIsValid = false;
            errors["regUsuarioRol"] = "Campo obligatorio.";
        }

        if (typeof fields["regUsuarioRol"] !== "undefined") {
            if (!fields["regUsuarioRol"] != "") {
                formIsValid = false;
                errors["regUsuarioRol"] = "Seleccione una opción.";
            }
        }

        this.setState({ errors: errors, alerta: "" });
        return formIsValid;
    }


    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            lista_usuarios.push(
                {
                    id: lista_usuarios.length + 1,
                    nombre: e["target"][0].value,
                    apellido: e["target"][1].value,
                    tipo_identificacion: e["target"][2].value,
                    numero_documento: e["target"][3].value,
                    rol: e["target"][4].value,
                } );
            this.setState({alerta: "success"});
        }else{
	        this.setState({alerta: "danger"});
        }
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields, alerta: "" });
    }
    render() {
      
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className="container-sm">
                    <div className="row justify-content-center">
                        <div className="col col-md-9 regUsuario-content">
                            <div className="col-sm-auto">
                                <div className="row justify-content-center">
                                    <div className="col-sm-auto">
                                        <h3>Registrar Usuarios</h3>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-sm-6">
                                        {this.state.alerta == "success" ? <Alert tipo="success" mensaje="Usuario agregado correctamente"/>: ""}
                                        {this.state.alerta == "danger" ? <Alert tipo="danger" mensaje="Error al agregar el usuario"/>: ""}
                                    </div>
                                </div><br />
                                <form className="card" onSubmit={this.contactSubmit.bind(this)}>
                                    <div className="row g-2 p-2">
                                        <div className="col-sm-4 position-relative">
                                            <label for="regUsuarioNombre" className="form-label">Nombre del usuario</label>
                                            <div className="input-group justify-content-center">
                                                <span className="input-group-text">
                                                    <img src={iconCliente} className="usuarios-content-form-icon" alt="icono"/>
                                                </span>
                                                <input type="text" class="form-control" id="regUsuarioNombre" onChange={this.handleChange.bind(this, "regUsuarioNombre")} value={this.state.fields["regUsuarioNombre"]} placeholder="Escriba el nombre" required ></input>
                                            </div>
                                            <div>
                                                <span style={{ color: "red" }}>{this.state.errors["regUsuarioNombre"]}</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 position-relative">
                                            <label for="regUsuarioApellidos" className="form-label">Apellidos del usuario</label>
                                            <div className="input-group justify-content-center">
                                                <span className="input-group-text">
                                                    <img src={iconCliente} className="usuarios-content-form-icon" alt="icono"/>
                                                </span>
                                                <input type="text" class="form-control" id="regUsuarioApellidos" onChange={this.handleChange.bind(this, "regUsuarioApellidos")} value={this.state.fields["regUsuarioApellidos"]} placeholder="Escriba los apellidos" required ></input>
                                            </div>
                                            <div>
                                                <span style={{ color: "red" }}>{this.state.errors["regUsuarioApellidos"]}</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 position-relative">
                                            <label for="regUsuarioTipoId" className="form-label">Tipo de identificación</label>
                                            <div className="input-group justify-content-center">
                                                <span className="input-group-text">
                                                    <img src={iconProducto} className="usuarios-content-form-icon" alt="icono"/>
                                                </span>
                                                <select className="form-select" id="regUsuarioTipoId" onChange={this.handleChange.bind(this, "regUsuarioTipoId")} value={this.state.fields["regUsuarioTipoId"]} required >
                                                    <option value="" selected>Seleccione el tipo de identificación</option>
                                                    <option value="Cedula">Cedula</option>
                                                    <option value="Tarjeta">Tarjeta</option>
                                                    <option value="Cedula Extranjera">Cedula Extranjera</option>
                                                </select>
                                            </div>
                                            <div>
                                                <span style={{ color: "red" }}>{this.state.errors["regUsuarioTipoId"]}</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 position-relative">
                                            <label for="regUsuarioDocumento" className="form-label">Número de documento</label>
                                            <div className="input-group justify-content-center">
                                                <span className="input-group-text">
                                                    #
                                                </span>
                                                <input type="number" class="form-control" id="regUsuarioDocumento" onChange={this.handleChange.bind(this, "regUsuarioDocumento")} value={this.state.fields["regUsuarioDocumento"]} placeholder="Escriba el numero de documento" required ></input>
                                            </div>
                                            <div>
                                                <span style={{ color: "red" }}>{this.state.errors["regUsuarioDocumento"]}</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-5 position-relative">
                                            <label for="regUsuarioRol" className="form-label">Rol de usuario</label>
                                            <div className="input-group justify-content-center">
                                                <span className="input-group-text">
                                                    <img src={iconProducto} className="usuarios-content-form-icon" alt="icono"/>
                                                </span>
                                                <select className="form-select" id="regUsuarioRol" onChange={this.handleChange.bind(this, "regUsuarioRol")} value={this.state.fields["regUsuarioRol"]} required >
                                                    <option value="" selected>Seleccione el rol de usuario</option>
                                                    <option value="Administrador" >Administrador</option>
                                                    <option value="Vendedor" >Vendedor</option>
                                                </select>
                                            </div>
                                            <div>
                                                <span style={{ color: "red" }}>{this.state.errors["regUsuarioRol"]}</span>
                                            </div>
                                        </div>
                                        <div className="col-12 card-header">
                                            <div className="d-grid gap-1 d-sm-flex justify-content-center">
                                                <button type="submit" className="btn btn-primary">
                                                    <img src={iconIng} className="usuarios-content-form-btn-icon" id="iconIng" alt="icono boton guardar"/>
                                                    Guardar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="card col-sm-9">
                                <div className="card-header">
                                    <div className="row justify-content-center">
                                        <div className="col-sm-auto">
                                            <h3>Lista de Usuarios</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Apellido</th>
                                                <th scope="col">Tipo Documento</th>
                                                <th scope="col">N° Documento</th>
                                                <th scope="col">Rol</th>
                                                <th scope="col">Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <ListaUsuarios  usu={lista_usuarios}/>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-sm">
                        <div className="row justify-content-center">
                            <div className="col col-sm-3">
                                &copy; Todos los derechos reservados.
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        )

    }

}

export default AgregarUsuario;
