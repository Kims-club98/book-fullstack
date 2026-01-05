import { useEffect, useState } from 'react'
import { deptListDB } from '../../service/deptLogic'
import styles from './dept.module.css'
import DeptRow from './DeptRow'

const DeptList = () => {
  const [deptList, setDeptList] = useState([])
  useEffect(() => {
    const getDeptList = async() => {
      const dept = {
        deptno: 0,
        dname: null,
        loc: null
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
			    <button className='btn btn-danger' id="btn_search" onClick={reactSearch}>검색</button>
		    </div>
	     </div> 
      <div className={styles.deptlist}>
        <table className='table'>
          <thead>
            <tr>
              <th>부서번호</th>
              <th>부서명</th>
              <th>지역</th>
            </tr>
          </thead>
          <tbody>
          {deptList.map(dept => (
            <DeptRow key={dept.deptno} dept={dept} />
          ))}
          </tbody>
        </table> 
        <hr />    
        <div className={styles.footer}>
          <button className="btn btn-warning" onClick={jsonDeptList}>
            전체조회
          </button>&nbsp; 
          <button className="btn btn-success" onClick={()=> console.log('등록 모달 호출')}>
            부서등록
          </button> 
        </div>
      </div>
      </div>
      {/* ========================== [[ 부서등록 Modal ]] ========================== */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      {/* ========================== [[ 부서등록 Modal ]] ========================== */}
    </>
  )
}

export default DeptList
