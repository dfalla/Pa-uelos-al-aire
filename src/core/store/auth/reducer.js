import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem('Token') || '',
    authSuccess: false,
    authRegisterSuccess: false
    
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action)=>{
            state.token = action.payload;
            state.authSuccess = true;
        },

        setAuthRegisterSuccess: (state, action) =>{
            state.authRegisterSuccess = true;
        }
    }
});
export default authSlice.reducer;