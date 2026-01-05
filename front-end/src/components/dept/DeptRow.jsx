import { Link } from "react-router"

const DeptRow = (props) => {
  return (
    <>
      <tr>
        <td>{10}</td>
        <td>
          <Link to={"/deptDetail/10"} className="btn btn-primary">
          {"부서이름"}
          </Link>
        </td>
        <td>{"지역"}</td>
      </tr>
    </>
  )
}

export default DeptRow
