import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'


import * as Yup from 'yup';
import StudentsHttp from '../../http/studentsHttp';
import { addStudent } from '../../store/students/reducer';



const INITIALVALUES = {
    dni: '',
    nombre: '',
    apellido: '',
};

const AddStudentsSchema = Yup.object().shape({
    dni: Yup.string('Solo numeros')
            .required('Este campo es requerido')
            .min(8, 'Tiene que ser mínimo 8 caracteres')
            .max(8, 'Tiene que ser máxmo 8 caracteres'),
    nombre: Yup.string().required('Este campo es requerido'),
    apellido: Yup.string().required('Este campo es requerido'),
  });

const CreateStudents = () => {
  const navigate = useNavigate();
  const  dispatch = useDispatch()
  
  const {  errors, getFieldProps, handleSubmit, touched } = useFormik({
    initialValues: INITIALVALUES,
    onSubmit: ( values ) => {
        StudentsHttp.create(values).then(res=>dispatch(addStudent(res)));
        navigate('/alumnos');
    },
    validationSchema: AddStudentsSchema
  })
  return (
   <>
    <div className="container text-center mt-5">
        <div className="row">
           <div className="col-md-4"></div>
           <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                        Registrar alumno
                    </div>
                    <div className="card-body">
                        <form onSubmit = { handleSubmit }>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder='Escribe el nombre' 
                                    autoComplete="off"
                                    className={ `mt-2 form-control ${ touched.nombre && errors.nombre ? "is-invalid" : "" }`}
                                    {...getFieldProps('nombre')}
                                
                                />
                                <div
                                    name='nombre'
                                    className="invalid-feedback"
                                >
                                    { errors.nombre }
                                </div>
                            </div>

                            <div className="from-group">
                                <input
                                    type="text" 
                                    placeholder='Escribe el apellido'
                                    autoComplete="off"
                                    className={ `mt-2 form-control ${ touched.apellido && errors.apellido ? "is-invalid" : "" }`}
                                    {...getFieldProps('apellido')}
                                    
                                />

                                <div
                                    name='apellido'
                                    className="invalid-feedback"
                                >
                                    { errors.apellido }
                                </div>
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder='Escribe el dni' 
                                    autoComplete="off"
                                    className={ `mt-2 form-control ${ touched.dni && errors.dni ? "is-invalid" : "" }`}
                                    {...getFieldProps('dni')} 
                                    
                                />

                                <div
                                name='dni'
                                className="invalid-feedback"
                                >
                                    { errors.dni }
                                </div>
                            </div>

                            <div className="d-grid gap-2">
                                <button
                                    type='submit'
                                    className='btn btn-outline-primary btn-block mt-4'
                                >
                                Guardar

                                </button>
                            </div>


                        </form>
                    </div>
                </div>
           </div>
           <div className="col-md-4"></div>
        </div>
    </div>
   </>
  )
}

export default CreateStudents

