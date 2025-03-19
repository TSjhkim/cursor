// index.js파일은 React 애플리케이션의 시작점임. HTML의 root div를 찾아서 리액트앱과 연결시킴.
// 앱을 웹브라우저에 랜더링(나타내는)하는 역할.
// App 컴포넌트를 불러와서 화면에 표시하는 역할.
// 건물의 현관문과 같은 역할. 여기서 모든것이 시작됨.


// import A from B 구조임. A는 가져오려는 도구(코드,기능,컴포넌트의 이름). B는 그 도구가 있는 경로나 주소.
// 리액트는 웹페이지를 만들어주는 기술임. 그중 StrictMode는 코드를 체크해서 문제를 찾아주는 기능임. 이 기능을 가져온다는 코드임.
import React, {StrictMode} from 'react';
// 리액트를 웹페이지에 붙이겠다는 의미. createRoot는 리액트앱을 HTML의 특정페이지와 연결해주는 기능
import {createRoot} from 'react-dom/client';
// 내가 만든 메인화면(App.js)을 가져오겠다는 의미.
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);