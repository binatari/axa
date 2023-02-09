import React, { useEffect } from 'react'
import { useState } from 'react'
import { api } from '../utils/queries'
import { useHistory, useLocation } from 'react-router-dom'

const useAuth = () => {
 const [auth, setAuth] = useState(false)

//  const history = useHistory()
//  const path = useLocation()

//  useEffect(()=>{
//     setAuth(false)
//     const token = localStorage.getItem("token");
//     if(!token){
//         localStorage.removeItem("token");
//         history.replace('/login')  
//         return
//     }
//     setAuth(true)

//  }, [path])

 api.interceptors.response.use(
    (response) => response,
    async function (error) {
      // console.log('ll')
      const token = localStorage.getItem("token");
      if ( 401 === error.response.status) {
          localStorage.removeItem("token");
      }
    //   if (token && 401 !== error.response.status) {
    //     setAuth(true)
    // }
      return Promise.reject(error);
    }
  )

  return auth
}

export default useAuth