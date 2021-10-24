import 'bootstrap/dist/css/bootstrap.css';
const Busqueda = ({ ventas, setListVentas }) => {
    const find = (event) => {
      const regex = new RegExp(".*" + event.target.value + ".*");
      const ventasFilter = ventas.filter((venta) =>
      venta.nombreCliente.match(regex)
      );
      console.log(ventasFilter);
      if(event.target.value===""){
        setTimeout(() => window.location.reload(), 1000);
      }
      setListVentas(ventasFilter);
    };
  
    return (
        <div className="input-group mb-3"  style={{width: '40%', marginTop:'15px'}}>
            <span className="input-group-text" id="basic-addon1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </span>
            <input type="text" className="form-control" onChange={find} placeholder="Buscar por nombre de cliente...." aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
    );
};
export default Busqueda;