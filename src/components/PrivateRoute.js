import React from "react"; 
import { 
    Route,
    Redirect,
} from "react-router-dom";
import {useJwt} from 'react-jwt';
//validar 
const PrivateRoute=({children, ...rest})=> {
    let auth=localStorage.getItem("token");
    const {decodedToken, isExpired}=useJwt(auth);      
    return (
        <Route
            {...rest}
            render={({ location }) =>
                decodedToken && !isExpired ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute;