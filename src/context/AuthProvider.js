import * as React from "react";
import { useState } from "react";
import { useContext } from "react";
import { api } from "../utils/queries";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
  const [state, setState] = useState(false);

  const clearState = () => {
    setState(false);
  };

  const history = useHistory()
  let path = useLocation().pathname

  console.log(path.pathname)
 
  useEffect(()=>{
    setState(false)
    const token = localStorage.getItem("token");
    if(!token){
        localStorage.removeItem("token");
        history.replace('/login')  
        return
    }
    setState(true)

 }, [path])

  api.interceptors.response.use(
    (response) => {
      const token = localStorage.getItem("token");
      if (token) {
        setState(true);
      }

      return response;
    },
    async function (error) {
      // console.log('ll')
      const token = localStorage.getItem("token");
      if (401 === error.response.status) {
        localStorage.removeItem("token");
        setState(false);
        history.replace('/login')  
      }
      if (token && 401 !== error.response.status) {
        setState(true);
      }
      return Promise.reject(error);
    }
  );

  return (
    <AuthContext.Provider value={{ state, clearState, setState }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthProvider() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be within a provider");
  }
  return context;
}
