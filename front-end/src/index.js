import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthLogic from './components/service/authLogin';
import app from './components/service/firebase';

// AuthLogic 객체 생성하기
const authLogic = new AuthLogic(app);
console.log(authLogic);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  // 각 파일 이동
  <>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </>
);

