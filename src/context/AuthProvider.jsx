import React, { useEffect,useState } from 'react';
import axios from 'axios';
export const AuthContext = React.createContext(); 

export function AuthProvider ({children}){
    const [currentUser,setCurrentUser] =useState(null);
    
   async function login(email,password){
        try{
            let response = await axios.post("http://localhost:5000/user/login", {"email":email,"password":password})
            let user = response.data;
            setCurrentUser(user);
        }catch(err){
            console.log(err);
        }
    }
    async function signUp(email,password){
        try{
            let response = await axios.post("http://localhost:5000/user/signup", {"email":email,"password":password})
            let user = response.data;
            setCurrentUser(user);
          }catch(err){
              console.log(err);
          }
        
    }
    function signOut(){
      
    }

    async function addSkill(name , rating){
        try{
            let response = await axios.post("http://localhost:5000/skill",{name:name, rating: rating},
            {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': currentUser.data.token,
                }
            }
            )
            console.log(response);
          }catch(err){
              console.log(err);
          }
    }

    async function addProject(title , description, skills){
        try{
            let response = await axios.post("http://localhost:5000/project",{title:title, description: description, skills: skills},
            {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': currentUser.data.token,
                }
            }
            )
            console.log(response);
          }catch(err){
              console.log(err);
          }
    }

    async function  getSkills(name){
        try{
            let response = await axios.get("http://localhost:5000/skill",{
                headers: {
                'Content-Type': 'application/json',
                'Authorization': currentUser.data.token,
                }
            });
            console.log(response);
            return response.data.data;
        }catch(err){
            console.log(err);
        }
    }

    async function getProjects(){
        try{
            let response = await axios.get("http://localhost:5000/project",{
                headers: {
                'Content-Type': 'application/json',
                'Authorization': currentUser.data.token,
                }
            });
            console.log(response);
            return response.data.data;
        }catch(err){
            console.log(err);
        }
    }
    
    useEffect(()=>{
        console.log(currentUser);
    },[currentUser]);

    let values ={
        currentUser: currentUser,
        login:login,
        signOut:signOut,
        signUp :signUp,
        addSkill: addSkill,
        addProject: addProject,
        getSkills: getSkills,
        getProjects:getProjects,
    }

    return (<AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>);

}