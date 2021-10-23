import React from "react";
import './productos.css';
import Producto from './Productos';
import CallApi from "../../api";
import {useEffect, useState} from "react";
function Lista_Productos(){
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const response = await CallApi();
          setProductos(response);
        };
    
        fetchData();
    }, []);

    return(
        <div className="row">      
            {               
                productos.map((producto)=>(
                    <div className="col" key={producto._id}> 
                        <Producto productos={productos} producto={producto}/>
                    </div>
                ))            
            }
        </div>         
    );
}

export default Lista_Productos