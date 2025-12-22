import React from 'react'
import { loginGoogle } from '../../service/authLogic'
import { useNavigate } from 'react-router'

const LoginForm = () => {
  const navigate = useNavigate()
  const handleLogin = async () => {
    try {
      await loginGoogle()
      navigate("/")
    } catch (error) {
      console.error("로그인 실패", error)
    }
  }
  return (
    <>
      <h2>로그인화면</h2>
      <button type='button' onClick={handleLogin}>구글로그인</button>
    </>
  )
}
export default LoginForm
