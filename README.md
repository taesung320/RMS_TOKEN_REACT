# RMS_TOKEN_REACT
소셜로그인 토큰생성

***시작하기 (클론받고 루트에서)

```
npm i
npm start
```

***배포 한경 사용시

```
const BACKEND_PORT="8080";
const FRONTEND_PORT="3000";

export const HOST_URL="http://localhost"; //이 부분을 배포된 서버 url로 변경

export const LOCAL_HOST="http://localhost";
export const BACKEND_URL=`${HOST_URL}:${BACKEND_PORT}`;
export const FRONTEND_URL=`${LOCAL_HOST}:${FRONTEND_PORT}`;

export const socialList=[
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
```
