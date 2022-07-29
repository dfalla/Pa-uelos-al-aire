import { Navigate, Route, Routes } from 'react-router-dom'
import SignIn from '../pages/SignIn/SignIn'
import SignUp from '../pages/SignUp/SignUp'

const AuthRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='sign-in' replace/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
        <Route path='sign-up' element={<SignUp/>}/>
    </Routes>
  )
}

export default AuthRouter