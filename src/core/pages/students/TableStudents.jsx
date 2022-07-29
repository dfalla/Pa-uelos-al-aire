import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import ButtonEditar from './ButtonEditar'
import ButtonEliminar from './ButtonEliminar'

const TableStudents = ({ students, params  ,setStudents }) => {
  const navigate = useNavigate();
  const gotNewStudent = () =>{
    navigate('/alumnos/crear-alumno')
  }
  return (
    <>
        <table className="table">
            <thead>
            <tr>
                <th>NOMBRE</th>
                <th>APELLIDO</th>
                <th>DNI</th>
                <th>ACCIONES</th>
            </tr>
            </thead>
            <tbody>
            {
                students.length > 0 ? (
                  students.map( ( student ) => (
                    <tr key = {student.id}>
                    <td>{student.nombre}</td>
                    <td>{student.apellido}</td>
                    <td>{student.dni}</td>
                    <td>
                        <ButtonEditar
                          {...student}
                        />
                        <ButtonEliminar
                          setStudents = { setStudents }
                          {...student}
                        />
                    </td>
                    </tr>
                ))
                ) : (
                 <tr>
                    <td colSpan="4" style={{textAlign: 'center'}}>
                      No hay alumnos registrados 
                      <br/>
                      <br/>
                      <button
                        className='btn
                        btn-outline-primary'
                        onClick= { gotNewStudent }
                      >
                        Registrar Alumnos
                      </button>
                    </td>
                 </tr>
                )
            }
            </tbody>
        </table>
    </>
  )
}

export default TableStudents