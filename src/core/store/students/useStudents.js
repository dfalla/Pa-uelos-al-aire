import { useSelector } from 'react-redux';
import StudentsSelector from './selector';


const useStudents = () => useSelector(StudentsSelector)

export default useStudents