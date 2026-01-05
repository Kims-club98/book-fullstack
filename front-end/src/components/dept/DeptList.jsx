import { useEffect, useState } from 'react'
import { deptListDB } from '../../service/deptLogic'
import styles from './dept.module.css'
import DeptRow from './DeptRow'

const DeptList = () => {
  const [deptList, setDeptList] = useState([])
  useEffect(() => {
    const getDeptList = async() => {
      const dept = {
        deptno: 10,
        dname: '영업부',
        loc: '대전'
      }
      const res = await deptListDB(dept)
      console.log(res)
      setDeptList(res)
      //console.log(res.data)
    }
    getDeptList()
  },[])//의존성배열이 빈통이면 최초 한 번만 호출된다.
  const jsonDeptList = () => {

  }

  const reactSearch = () => {
    
  }
  return (
    <>
      <div className="container">
	    <div className="page-header">
      <h2>부서관리&nbsp;<i className="fa-solid fa-angles-right"></i>&nbsp;<small>부서목록</small></h2>
        <hr />
	    </div>      
      <div className="row">
        <div className="col-3">
          <select id="gubun" className="form-select" aria-label="분류선택">
            <option defaultValue>분류선택</option>
            <option value="deptno">부서번호</option>
            <option value="dname">부서명</option>
            <option value="loc">지역</option>
          </select>			
        </div>
		    <div className="col-6">
			    <input type="text" id="keyword" className="form-control" placeholder="검색어를 입력하세요" 
                 aria-label="검색어를 입력하세요" aria-describedby="btn_search" />
		    </div>
		    <div className="col-3">
			    <button variant='danger' id="btn_search" onClick={reactSearch}>검색</button>
		    </div>
	     </div> 
      <div className='book-list'>
        <table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>부서번호</th>
              <th>부서명</th>
              <th>지역</th>
            </tr>
          </thead>
          <tbody>
          {deptList.map(dept => (
            <DeptRow key={dept.DEPTNO} dept={dept} />
          ))}
          </tbody>
        </table> 
        <hr />    
        <div className='booklist-footer'>
          <button variant="warning" onClick={jsonDeptList}>
            전체조회
          </button>&nbsp; 
          <button variant="success" onClick={()=> console.log('등록 모달 호출')}>
            부서등록
          </button> 
        </div>
      </div>
      </div>
    </>
  )
}

export default DeptList
