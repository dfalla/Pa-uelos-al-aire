import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import StudentsHttp from "../../http/studentsHttp";
import StudentsActions from "../../store/students/actions";
import useStudents from "../../store/students/useStudents";
// import FormStudents from "./CreateStudents";
import TableStudents from "./TableStudents";

const Students = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { params } = useStudents();
  

  useEffect(() => {
    StudentsHttp.getAll().then( ( res )=> setStudents(res) );
    
  }, []);

  // useEffect(() => {
  //   dispatch(StudentsActions.getStudents())
  // }, [dispatch])

  const goToNewStudent = () => {
    navigate('/alumnos/crear-alumno');
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
              className="btn btn-primary"
              onClick={ goToNewStudent }
            >
              Nuevo
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <TableStudents
           students={ students } 
              params = { params }
           setStudents = { setStudents }
          />
        </div>
      </div>
    </div> 
  )
}

export default Students