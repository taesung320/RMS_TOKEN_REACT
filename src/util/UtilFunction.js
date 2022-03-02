import {FRONTEND_URL,BACKEND_URL} from "./env"
function getSocialLoginUrl(type){
    if(type==="kakao"){
        return `${BACKEND_URL}/oauth2/authorization/${type}?redirect_uri=${FRONTEND_URL}/oauth/redirect`
    }else{
        return "";
    }
}
export  {
    getSocialLoginUrl
};