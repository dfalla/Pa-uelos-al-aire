import StudentsHttp from "../../http/studentsHttp";
import { studentsSlice } from "./reducer";

const getStudents = () => {
    return (dispatch, getState) => {
        const { isParamsLoaded } = getState().students;

        if(isParamsLoaded) return;

        dispatch(StudentsActions.loadParams());

        StudentsHttp.getAll().then(res=>dispatch(StudentsActions.setStudents(res)));
    }
}




const StudentsActions = {
    ...studentsSlice.actions,
    getStudents,
    
}

export default StudentsActions;