import React from "react";

const AlertInactivo=()=> {
    return(
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <img src="..." class="rounded me-2" alt="..."/>
                <strong class="me-auto">Mensaje</strong>
                <small></small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                Su usuario esta en estado Inactivo. 
                Comuniquese con el administrador del sistema!
            </div>
        </div>
    );
}
export default AlertInactivo;