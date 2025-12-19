import DeptList from '../dept/DeptList' // Import 된 것을 확인 可
import Header from '../include/Header'
import Footer from '../include/footer'

const DeptPage = () => {
  return (
    <>
    <Header/>
      <h2>부서 관리</h2>
      <DeptList/> {/*사용자 정의 태크 html처럼 불러오기 가능. */}
    <Footer / >

    </>
  )
}

export default DeptPage
// 기본 템플릿 rafce