import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthLogic from './service/authLogic';
import app from './service/firebase';
//  AuthLogic객체 생성하기
const authLogic = new AuthLogic(app)
console.log(authLogic)
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

