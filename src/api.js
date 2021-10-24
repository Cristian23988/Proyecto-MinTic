const CallApi = async () => {
    const response = await fetch("https://improtic-backend.herokuapp.com/api/products");
    const data = await response.json();
    return data;
  };
  
  export default CallApi;