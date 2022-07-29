import StudentsHttp from "../../http/studentsHttp";
import Swal from "sweetalert2";


const ButtonEliminar = ({id, nombre, apellido, setStudents}) => {
  
    const remove = () => {
        Swal.fire({
            title: `Desea eliminar a ${nombre} ${apellido}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
          }).then((result) => {
            if (result.isConfirmed) {
              StudentsHttp.delete(id)
                .then(()=>{
                  setStudents( ( students ) => students.filter( student => student.id !== id ) );
                });  
              Swal.fire(
                'Eliminado!',
                `${nombre} ${apellido} ha sido elminado`,
                'success'
              )
            }
          })
    }
  return (
    <>
        <button
          className="btn btn-outline-danger"
          onClick={ remove }
        > 
          Elimnar
        </button>
    </>
  )
}

export default ButtonEliminar