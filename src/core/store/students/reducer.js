import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    params: [],
    isParamsLoaded: false,
    isParamsLoading: false,
};

export const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        addStudent: ( state, action )=>{
            console.log(state);
            return{
                ...state,
                params: [
                    ...state.params,
                    action.payload
                ]
                    
            }
        },
        loadParams: (state) => {
            state.isParamsLoading = true;
        },
        setStudents: (state, action) => {
            state.isParamsLoading = false;
            state.isParamsLoaded = true;
            state.params = action.payload;
        }
    }
});

export const { addStudent } = studentsSlice.actions;

export default studentsSlice.reducer;

