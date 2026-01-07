import axios from 'axios'
import { data } from 'react-router';

// ㅎ아래 코드는 요청 시마다 반복되는 코드가 있다.
// 공통 axios 인스턴스화 현상을 개선할 수 있다.
const api = axios.create({
  baseURL: process.env.REACT_APP_SPRING_IP, // 예: http://localhost:8000/
  timeout: 10000, // 요청 제한 시간

});

// 서블릿에 부서 등록 요청하기
export const deptInsertDB = async (data) => {
  const res = await api.post('dept/deptInsert', data)
  return res.data
}// end of deptInsertDB(新)

/*
// 서블릿에게 부서 등록 요청하기(舊방식)
export const deptInsertDB = async (data) => {
  console.log(data)
  try {
    const res = await axios({
      method: 'post',
      url: process.env.REACT_APP_SPRING_IP+'deptInsert',
      data: data
    })
    console.log(res.data)
    return res
  } catch (error) {
    console.error("부서등록 실패!!!", error)    
  }
}//end of deptInsertDB
*/

// 부서 수정하기
export const deptUpdateDB = async (data) => {
  const res = await api.put('dept/deptUpdate', data) // ? await는 오류 나옴
  return res.data // 1이면 수정 성공, 0이면 실패
}// end of deptUpdateDB(新方式)

/*
// 서블릿에게 부서 수정 요청하기(舊방식)
export const deptUpdateDB = async (data) => {
  console.log(data)
  try {
    const res = await axios({
      method: 'put',
      url: process.env.REACT_APP_SPRING_IP+'deptUpdate',
      data: data
    })
    console.log(res.data)
    return res
  } catch (error) {
    console.error("부서등록 실패!!!", error)    
  }
}//end of deptInsertDB
*/

// 부서 목록 조회 - type, 데이터셋 구조, json, [] {} []
export const deptListDB = async (data) => {
  console.log(data) // deptno, dname, loc, keyword, searchType
  const res = await api.get('deptList',{params: data})
  console.log(res)
  return res.data
}// end of deptListDB(新方式)

/*
// 부서 목록 가져오기(舊방식)
export const deptListDB = async (data) => {
  console.log(data)
  try {
    const res = await axios({
      method: 'get',
      url: process.env.REACT_APP_SPRING_IP+'deptList',
      params: data
    })
    console.log(res.data)
    return res 
  } catch (error) {
    console.error("부서목록 가져오기 실패!!!", error)
    //호출한 쪽에서 catch하도록 다시 던져 줄때
    throw error
  }
}//end of deptListDB
*/

//부서 삭제하기
export const deptDeleteDB = async (deptno) => {
  const res = await api.delete('dept/deptDelete',{params: deptno})
  return res.data// 1이면 삭제 성공, 0이면 삭제 실패
}// end of deptDeleteDB(新方式)

/*
// 부서 삭제하기(舊方式)
// delete from dept where deptno = 61
export const deptDeleteDB = async (deptno) => {
  console.log(deptno) // 61번
  try {
    const res = await axios({
      method: 'delete',
      url: process.env.REACT_APP_SPRING_IP+'deptDelete',
      params: {'deptno': deptno}
    })
    console.log(res.data)
    return res 
  } catch (error) {
    console.error("부서삭제 실패!!!", error)
    //호출한 쪽에서 catch하도록 다시 던져 줄때
    throw error
  }
}//end of deptListDB
*/