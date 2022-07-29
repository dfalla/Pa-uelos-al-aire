import { NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';


import styles from '../../styles/Style.module.scss';
import { useDispatch } from 'react-redux';
import AuthActions from '../../../../core/store/auth/actions';
import { useEffect } from 'react';
import useAuth from '../../../../core/store/auth/useAtuh';



const INITIALVALUES = {
    email: '',
    password: ''
};

const SignInSchema = Yup
  .object()
  .shape({
    username: 
        Yup
        .string()
        .email('Formato de email inválido'),
    password: 
        Yup
        .string()
        .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,'La contraseña debe contener al menos 8 caracteres, una mayúscula, un número y un carácter de caso especial')
        .required('Este campo es requerido')
  });


const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authSuccess } = useAuth();
  const { touched, errors, getFieldProps, handleSubmit } = useFormik({
    initialValues: INITIALVALUES,
    onSubmit: (values)=>{
      dispatch(AuthActions.fetchSignIn(values));
    },
    validationSchema: SignInSchema
  });

  useEffect(() => {
    if(authSuccess) navigate('/');
  }, [authSuccess, navigate]);

  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className={styles.formulario_container}>
          <div className={styles.form}>
            <div className="row mb-3">
              <div className="col-lg-12 text-center">
                <h1 className="mt-5">Iniciar Sesión</h1>
                <div className='mt-5'>¿ No tienes una cuenta? <NavLink to='/auth/sign-up' className={ styles.form__link }><p>Entra aquí</p></NavLink></div>
              </div>
            </div>

            <form onSubmit={ handleSubmit }>
              <div className="form-group mb-2">
                <label htmlFor="email">Email</label>
                <input       
                        type="text"
                        name='email'
                        placeholder='fenan.03.95@gmail.com' 
                        autoComplete="off"
                        className={ `mt-2 form-control ${ touched.email && errors.email ? "is-invalid" : "" }`}
                        {...getFieldProps('email')}
                />

                <div
                  name='email'
                  className="invalid-feedback"
                >
                  { errors.username }
                </div>

              </div>
              <div className="form-group">
              <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name='password'
                  placeholder="Fabrizio#12" 
                  className={ `mt-2 form-control ${ touched.password && errors.password ? "is-invalid" : "" }` }
                  {...getFieldProps('password')}
                />

                <div
                  name='password'
                  className="invalid-feedback"
                >
                  { errors.password }
                </div>
              </div>
              <div className="d-grid gap-2">
                <input
                  type='submit'
                  value='Sign In'
                  className='btn btn-primary btn-block mt-4'
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

export default SignIn