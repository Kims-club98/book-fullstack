import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './components/pages/HomePage';
import LoginForm from './components/auth/LoginForm';
import DeptList from './components/dept/DeptList';
//리액트에서는 태그를 만들어 쓴다.
//주의: 콤포넌트의 이름을 반드시 대문자로 한다.
//화살표 함수로 변경한 부분
//() => ()
//() => {}
const App = () => {
  //선언부
  return (
    <>
      <div style={{ height: '100vh'}}>
        <Routes>
          <Route path='/' exact={true} element={<HomePage />} /> {/*홈페이지 페이지 */}
          <Route path='/login' exact={true} element={<LoginForm />} /> {/*로그인 폼*/}
          <Route path='/dept' exact={true} element={<DeptList />} /> {/*부서 리스트 페이지*/}

        </Routes>
      </div>
    </>
  );
}

export default App;