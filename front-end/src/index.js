import ReactDOM from 'react-dom/client';
import App from './App';
import BookApp from './BookApp';
import { BrowserRouter } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css'


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  // 각 파일 이동
  <>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </>
);

