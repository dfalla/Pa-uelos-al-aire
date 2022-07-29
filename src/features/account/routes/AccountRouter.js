import { Navigate, Route, Routes } from "react-router-dom"
import Account from "../pages/Account"

const AccountRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='cuenta' replace/>}/>
        <Route index element={<Account/>} />
    </Routes>
  )
}

export default AccountRouter