import authSelector  from './selector';
import { useSelector } from 'react-redux';

const useAuth = () => useSelector(authSelector);

export default useAuth;
 