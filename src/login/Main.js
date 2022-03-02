
import React,{useEffect,useState} from "react";
import  LogedinPage  from "./LogedinPage";
import  LoginPage  from "./LoginPage";
function Main({props}){
    const [token,setToken]=useState(0);
    const [type,setType]=useState(0);
    const [isInit,setIsInit]=useState(0);
    console.log(props);
    useEffect(()=>{
        if(!isInit){
            setToken(localStorage.getItem("token"));
            setType(localStorage.getItem("type"))
            setIsInit(true);
        }
        console.log(token,null);

    })
    if(token){
        console.log(token);
        return <LogedinPage type={type} token={token}/>;
    }else{
        return <LoginPage/>;
    }

}
export default Main;