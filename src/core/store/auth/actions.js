import AuthHttp from "../../../features/auth/http/AuthHttp";
import { authSlice } from './reducer';

const fetchSignIn = (credentials) =>{
    return (dispatch, getState) => {
        AuthHttp.signIn(credentials)
            .then(( res )=> { 
                dispatch(authSlice.actions.setToken(res.accessToken))
            })
    }
};

const fetchSignUp = (values) => {
    return (dispatch, getState) => {
        AuthHttp.signUp(values).then(()=>{
            dispatch(authSlice.actions.setAuthRegisterSuccess());
        });
    }
}


const AuthActions = {
    ...authSlice.actions,
    fetchSignIn,
    fetchSignUp,
   
}

export default AuthActions;