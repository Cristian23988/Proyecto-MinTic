const callApi = async (url, met,value) => {
    if(value){
        const r = new Request("http://localhost:3001/api"+url, {
            method: met,
            body: JSON.stringify(value),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });
        
        fetch(r)
            .then(res => res.json())
            .then(res => console.log(res));
        return r;
    }else{
        const response = await fetch("http://localhost:3001/api" + url);
        const data = await response.json();
        return data;
    }
  };
  
  const api = {
    products: {
      list() {
        return callApi("/products", null, null);
      },
      getById(value) {
        return callApi("/products/entire/"+value, null, null);
      },
      create(value) {
        return callApi("/products", 'POST', value);
      },
      delete(value){
        return callApi("/products", 'DELETE', value);
      }
    },
    categorias: {
      list() {
        return callApi("/categoria", null, null);
      },
      getById(value) {
        return callApi("/categoria/"+value, null, null);
      }
    },
      ventas: {
        list() {
          return callApi("/ventas", null, null);
        },
        create(value) {
          return callApi("/ventas", 'POST', value);
        },
      },
      Usuarios:{
      list(){
        return callApi("/Usuarios",null,null);
      },
      create(value) {
        return callApi("/Usuarios", 'POST', value);
      },
        getById(value) {
        return callApi("/Usuarios/"+value, null, null);
      },

    },

    
  };
  
  export default api;
  