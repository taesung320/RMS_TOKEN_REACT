
import React from "react";
import {getSocialLoginUrl} from "../util/UtilFunction"
import {socialList} from "../util/env"
import '../asset/style.css'
function renderLoginList(){
    const ret=socialList.map((item,idx)=>{
        return (<div class={"center-item-list"} >
            <a className="social-link" href={getSocialLoginUrl(item.provider)}>{`${item.provider}로 로그인`}</a>
        </div>)
    })
    return ret;
}
function LoginPage(){
    return(
    <div className="basic-page">
        <h3>social login</h3>
        {renderLoginList()}
    </div>
    )
}

export default LoginPage;