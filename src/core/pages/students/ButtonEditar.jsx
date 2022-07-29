import { useNavigate } from 'react-router-dom';
import './styles/button.css';
const ButtonEditar = ({id, nombre, apellido, dni}) => {
    const navigate = useNavigate();
    const edit = () =>{
       navigate(`/alumnos/${id}`);
    }
  return (
    <>
        <button
          className="btn btn-outline-warning boton"
          onClick={ edit }
        >
            Editar
       </button>
    </>
  )
}

export default ButtonEditar