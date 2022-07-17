import React, { useEffect,useState } from 'react';
import axios from 'axios';
export const AuthContext = React.createContext(); 

export function AuthProvider ({children}){
    const [currentUser,setCurrentUser] =useState(null);
   
   async function login(email,password){
        try{
          let response = await axios.post("http://localhost:5000/user/login", {"email":email,"password":password})
            
            console.log(response);
        }catch(err){
            console.log(err);
        }
    }
    async function signUp(email,password){
        try{
            let response = await axios.post("http://localhost:5000/user/signup", {"email":email,"password":password})
              
              console.log(response);
          }catch(err){
              console.log(err);
          }
        
    }
    function signOut(){
      
    }
    useEffect(()=>{
        

    },[]);

    let values ={
        currentUser:currentUser,
        login:login,
        signOut:signOut,
        signUp :signUp,
    }

    return (<AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>);

}