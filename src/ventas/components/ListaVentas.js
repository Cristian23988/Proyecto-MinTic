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
    const UpdateItem=(idSeleccionado)=>{
        const lista = ventas.filter((item) => item.id == idSeleccionado);   
        <UpdateVentas  info = {lista} />  
    }
    return (
        ventas.map((vent) => (    
            <tr>
            <th scope="row">{vent.id}</th>
            <td>{vent.nombreComprador}</td>
            <td>{vent.producto}</td>
            <td>{vent.cantidad}</td>
            <td>{vent.nombreVendedor}</td>
            <td>{vent.total}</td>
            <td colspan="2" className="col">
                <Link to="/updateVentas" ><button className="btn btn-warning btn-sm" onClick={()=>UpdateItem(vent.id)}>Editar</button></Link> 
                <button type="button"  className="btn btn-danger btn-sm" onClick={() => EliminarItem(vent.id)}> Eliminar</button>
            </td>
            </tr>
        ))
    )
}
export default ListaVentas;

