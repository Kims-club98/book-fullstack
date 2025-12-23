import axios from 'axios'

export const deptListDB = async (param) => {  // 오라클에서 가져옴
  try{
    const res = await axios.get(`${process.env.REACT_APP_TOMCAT_IP}dept`, {param}); // ``으로 써야 함!!!
    console.log(res.data)
    return res
  }catch(error){
    console.error("부서목록 불러오기 실패!", error)
    // 호출한 쪽에서 catch 하도록 다시 던져 줄 때(디버깅 팁)
    throw error
  }// end of try - err
}// end of deptListDB