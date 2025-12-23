import axios from 'axios'
// Servlet에 부서 등록 요청하기
export const deptInsertDB = async (data) => {
  console.log(data)
  try{
    const res = await axios.post(`${process.env.REACT_APP_TOMCAT_IP}`, data)
  }catch(error){
    console.error("부서등록 실패",error)
    throw error
  }
}// end of deptInsertDB


export const deptListDB = async (data) => {  
  console.log("deptListDB 호출실행")
  console.log(data)// 오라클에서 가져옴
  try{
    const res = await axios({
      method: 'get',
      url: process.env.REACT_APP_TOMCAT_IP+'detp',
      parmas: data
    })// ``으로 써야 함!!!
    console.log(res.data)
    return res
  }catch(error){
    console.error("부서목록 불러오기 실패!", error)
    // 호출한 쪽에서 catch 하도록 다시 던져 줄 때(디버깅 팁)
    throw error
  }// end of try - err
}// end of deptListDB

export const deptListDB2 = async (data) => {
  console.log("deptListDB2 호출실행")
  console.log(data)
  try{
    /*
      만일 파라미터로 값을 넘길 때 속성이름과 객체 리터럴 변수명이 같다면 생략이 가능함.
      const res = await axios.get(process.env.REACT_APP_TOMCAT_IP+'detp',{parmas})
    */
    const res = await axios.get(process.env.REACT_APP_TOMCAT_IP+'dept')
    return res
  }catch(e){
    console.error("부서목록 가져오기 실패!!",e)
    throw e
  }
}// end of deptListDE2

export const deptListDB3 = async (params) => {
  console.log("deptListDB3 호출")
  console.log(params)
  try{
    const res = await axios.get(process.env.REACT_APP_TOMCAT_IP+'dept',{params})
    console.log(res.data)
    return res
  }catch(error){
    console.error("부서목록 가져오기 실패!!!",error)
    throw error
  }
}// end of deptListDB3