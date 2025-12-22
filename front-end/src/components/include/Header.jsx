import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { logout } from '../../service/authLogic'

const Header = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // 로그인 성공시 이름이나 혹은 이메일 주소 담기
  const [myName, setMyName] = useState('')
  useEffect(() => {
    setMyName(window.localStorage.getItem("email"))
    setIsLoggedIn(true)
  },[])
  const handleLogout = () => {
    //로그아웃을 처리하기
    try {
      logout()
      setIsLoggedIn(false);
      setMyName('')
    } catch (error) {
      console.error("로그아웃 실패",error)
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="#">도서검색</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">부서관리</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">공지사항</Link>
            </li>
          </ul>

          {/*로그인, 로그아웃, 로그인한 이메일주소*/}
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {!isLoggedIn && (                
              <li className="nav-item" id="login">
                <Link className="nav-link active" to="/login">로그인</Link>
              </li>      
          )}
          {isLoggedIn && (      
            <>      
              <li className="nav-item" id="myEmail">
                <Link className="nav-link">{myName} 님.</Link>
              </li>              
              <li className="nav-item" id="logout">
                <Link className="nav-link" onClick={handleLogout}>로그아웃</Link>
              </li>
            </>
          )}  
            </ul>
          </div>
          {/*로그인, 로그아웃, 로그인한 이메일주소*/}
          
        </div>
      </nav>
    </>
  )
}

export default Header
