import * as React from "react";
function LogedinPage({token,history}){
    return (<div >
        <h3>loged in</h3>
        <p >
            {`Oauth token : Bearer ${token}`}
        </p>
        <button onClick={()=>{
            localStorage.removeItem("token");
            window.location.reload();
        }}>
            logout
        </button>
    </div>)
}

export default LogedinPage;