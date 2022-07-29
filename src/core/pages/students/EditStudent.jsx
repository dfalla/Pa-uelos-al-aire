import { useNavigate, useParams } from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import StudentsHttp from '../../http/studentsHttp';
import { useEffect, useState } from 'react';




const EditStudentsSchema = Yup.object().shape({
  dni: Yup.string('Solo numeros')
          .required('Este campo es requerido')
          .min(8, 'Tiene que ser mínimo 8 caracteres')
          .max(8, 'Tiene que ser máxmo 8 caracteres'),
  nombre: Yup.string().required('Este campo es requerido'),
  apellido: Yup.string().required('Este campo es requerido'),
});

const INITIALVALUES = {
  dni: '',
  nombre: '',
  apellido: '',
};

const EditStudent = () => {
  const { idAlumno } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState(INITIALVALUES);

  const{ errors, touched, getFieldProps, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values) => {
      StudentsHttp.update(idAlumno, values)
      .then(()=>{
        navigate('/alumnos');
      })
    },
    validationSchema :  EditStudentsSchema ,
    enableReinitialize: true
  
  });

  useEffect(() => {
    StudentsHttp.getOne( idAlumno ).then( ( res ) => {
      setInitialValues({
       dni: res.dni,
       nombre: res.nombre,
       apellido: res.apellido
      })
    })
  }, [idAlumno]);

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col"></div>
          <div className="col-6">
          <div className="card">
            <div className="card-header">
              Editar Alumno
            </div>
            <div className="card-body">
                <form onSubmit={ handleSubmit }>
                  <input
                    type="text"
                    placeholder='Escribe el nombre'
                    className={ `mt-2 form-control ${ touched.nombre && errors.nombre ? "is-invalid" : "" }`}
                    {...getFieldProps('nombre')} 
                    
                  />
                  <div
                    name="nombre"
                    className='invalid-feedback'
                  >
                    { errors.nombre }
                  </div>

                  <input
                    type="text"
                    placeholder='Escribe el apellido'
                    className={ `mt-2 form-control ${ touched.apellido && errors.apellido ? "is-invalid" : "" }`}
                    {...getFieldProps('apellido')} 
                    
                  />

                  <div
                    name="apellido"
                    className='invalid-feedback'
                  >
                    { errors.apellido }
                  </div>

                  <input
                    type="text"
                    placeholder='Escribe el dni' 
                    className={ `mt-2 form-control ${ touched.dni && errors.dni ? "is-invalid" : "" }`}
                    {...getFieldProps('dni')} 
                  />

                  <div
                    name="dni"
                    className='invalid-feedback'
                  >
                    { errors.dni}
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
          <div className="col"></div>
        </div>
      </div>
    </>
  )
}

export default EditStudent
