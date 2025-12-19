import React from 'react'
import DeptList from '../dept/DeptList' // Import 된 것을 확인 可

const DeptPage = () => {
  return (
    <>
      <h2>부서 관리</h2>
      <DeptList/> {/*사용자 정의 태크 html처럼 불러오기 가능. */}
    </>
  )
}

export default DeptPage
// 기본 템플릿 rafce