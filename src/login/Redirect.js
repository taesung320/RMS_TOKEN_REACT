import React,{useEffect} from "react";
import { useLocation,HistoryRouterProps} from "react-router-dom";
import {parse} from "query-string"
function Redirect({props}){
    const location=useLocation();
    const {token}=parse(location.search);
    useEffect(()=>{
        console.log({props});
        if(token){
            localStorage.setItem("token",token);
            window.location.href="/";
        }
    })
    return <></>;
}

export default Redirect;