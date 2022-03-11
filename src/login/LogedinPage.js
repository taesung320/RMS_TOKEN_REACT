import * as React from "react";
function LogedinPage({token,history}){
    function logOutHandler(){
        localStorage.removeItem("token");
        window.location.reload();
    }
    function copyToClipBoard(token){
        navigator.clipboard.writeText(token)
    }
    return (<div className="basic-page">
            <h4 className="oauth-header">
            {"Oauth token"}
            </h4>
            <button onClick={()=>copyToClipBoard(`Bearer ${token}`)} className="copy-to-clipboard">
                copy to clipboard
            </button>
            <p className="token-area">
                {`Bearer ${token}`}
            </p>

        <button onClick={logOutHandler}>
            logout
        </button>
    </div>)
}

export default LogedinPage;