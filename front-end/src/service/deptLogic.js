import axios from 'axios'

export const deptListDB = async (param) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_TOMCAT_IP}dept`,{param})
    console.log(res.data)
    return res 
  } catch (error) {
    console.error("부서목록 가져오기 실패!!!", error)
    //호출한 쪽에서 catch하도록 다시 던져 줄때
    throw error
  }
}//end of deptListDB