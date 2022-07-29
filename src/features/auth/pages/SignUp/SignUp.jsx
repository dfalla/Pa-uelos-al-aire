
import { NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import styles from '../../styles/Style.module.scss';
import AuthActions from '../../../../core/store/auth/actions';
import { useEffect } from 'react';
import useAuth from '../../../../core/store/auth/useAtuh';

const INITIALVALUES = {
    nombre: '',
    apellido: '',
    email: '',
    password: ''
};

const SignUpSchema = Yup.object().shape({
  nombre: Yup.string().required('Este campo es requerido'),
  apellido: Yup.string().required('Este campo es requerido'),
  email: Yup.string().email('Ingrese un formato válido').required('Este campo es requerido'),
  password: Yup.string().matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,'La contraseña debe contener al menos 8 caracteres, una mayúscula, un número y un carácter de caso especial').required('Este campo es requerido')
});


const SignUp = () => {
  const dispatch = useDispatch();
  const { authRegisterSuccess } = useAuth();
  const navigate = useNavigate();

  
  const { getFieldProps, touched, errors, handleSubmit } = useFormik({
    initialValues: INITIALVALUES,
    onSubmit: ( values ) => {
      dispatch(AuthActions.fetchSignUp(values));
    },
    validationSchema: SignUpSchema
  });

  useEffect(() => {
    if(authRegisterSuccess) navigate('/auth');
  }, [authRegisterSuccess, navigate]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className={styles.formulario_container}>
            <div className={styles.form}>
              <div className="row mb-2">
                <div className="col-lg-12 text-center">
                  <h1 className="mt-5">Registro</h1>
                  <div className='mt-5'>¿ Tienes una cuenta? <NavLink to='/auth/sign-in' className={ styles.form__link }><p>Entra aquí</p></NavLink></div>
                </div>
              </div>
              <form onSubmit={ handleSubmit }>
                <div className="form-group mb-2">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text" 
                    placeholder='Escribe tu nombre' 
                    autoComplete="off"
                    className={ `mt-2 form-control ${ touched.nombre && errors.nombre ? "is-invalid" : "" }`}
                    id='nombre'
                    {...getFieldProps('nombre')}
                  />
                  <div
                    name='nombre'
                    className="invalid-feedback"
                  >
                    { errors.nombre }
                  </div>
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="apellido">Apellido</label>
                  <input
                    type="text"
                    placeholder='Escribe tu apellido' 
                    autoComplete="off"
                    className={ `mt-2 form-control ${ touched.apellido && errors.apellido ? "is-invalid" : "" }`}
                    id='apellido'
                    {...getFieldProps('apellido')} 
                  />
                  <div
                    name='apellido'
                    className="invalid-feedback"
                  >
                    { errors.apellido}
                  </div>
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder='Escribe tu email' 
                    autoComplete="off"
                    className={ `mt-2 form-control ${ touched.email && errors.email ? "is-invalid" : "" }`}
                    id='email'
                    {...getFieldProps('email')} 
                  />
                  <div
                    name='email'
                    className="invalid-feedback"
                  >
                    { errors.email}
                  </div>
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder='Escribe tu password' 
                    autoComplete="off"
                    className={ `mt-2 form-control ${ touched.password && errors.password ? "is-invalid" : "" }`}
                    id='password'
                    {...getFieldProps('password')} 
                  />
                  <div
                    name='password'
                    className="invalid-feedback"
                  >
                    { errors.password}
                  </div>
                </div>
                <div className='d-grid gap-2'>
                  <input
                    type="submit"
                    className='btn btn-primary btn-block mt-4'
                    value="Sing Up" 
                  />
                </div>
              </form>
            </div> 
          </div>
        </div>
      </div>
    </div> 
  )
}

export default SignUp