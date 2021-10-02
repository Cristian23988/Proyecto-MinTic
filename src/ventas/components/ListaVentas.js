import './ListaVentas.css';
import React, { useState } from "react";
import UpdateVentas from './UpdateVentas';
import { Link } from "react-router-dom";
const ListaVentas = ({ ventas }) => {
    const  [ value , setValue ]  = useState (1);

    const EliminarItem = idSeleccionado => {
        const newList = ventas.filter((item) => item.id !== idSeleccionado)
        ventas.splice(0, ventas.length);
        newList.map((newVenta)=>{
            ventas.push({
                id: newVenta.id,
                producto: newVenta.producto,
                cantidad: newVenta.cantidad,
                nombreVendedor: newVenta.nombreVendedor,
                nombreComprador: newVenta.nombreComprador,
                total:newVenta.total,
            })
        })
        setValue( ( value +  1 ) )
        console.log("ELIMINADO", idSeleccionado,newList)
    }
    
    return (
        ventas.map((vent) => (    
            <tr>
            <th scope="row">#</th>
            <td>{vent.nombreComprador}</td>
            <td>{vent.producto}</td>
            <td>{vent.cantidad}</td>
            <td>{vent.nombreVendedor}</td>
            <td>{vent.total}</td>
            
            <td><Link to="/updateVentas" ><button className="btn btn-warning" >Editar</button></Link></td>
            <td><button type="button"  className="btn btn-danger" onClick={() => EliminarItem(vent.id)}> Eliminar </button></td>  
            </tr>
        ))
        
    );
    
}
export default ListaVentas;
