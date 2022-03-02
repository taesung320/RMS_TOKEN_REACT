
import React from "react";
import {getSocialLoginUrl} from "../util/UtilFunction"
const socialList=[
    {
        provider:"kakao",
    },
    {
        provider:"naver",
    },
    {
        provider:"google",
    },
    {
        provider:"facebook"
    }
]
function LoginPage(){
    function renderLoginList(){
        const ret=socialList.map((item,idx)=>{
            return (<div >
                <a href={getSocialLoginUrl(item.provider)}>{`${item.provider}로 로그인`}</a>
            </div>)
        })
        return ret;
    }
    return(
    <div>
        <h1>social login</h1>
        {renderLoginList()}
    </div>
    )
}

export default LoginPage;