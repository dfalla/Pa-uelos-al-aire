import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../core/components/layouts/Layout";
import Dashboard from "../core/pages/Dashboard";
import NotFound from "../core/pages/NotFound";
import RegisterStudents from "../core/pages/RegisterStudents";
import CreateStudents from "../core/pages/students/CreateStudents";
import EditStudent from "../core/pages/students/EditStudent";
import Students from "../core/pages/students/Students";


const Auth = lazy( () => import('../features/auth/routes/AuthRouter') );
const Account = lazy( () =>import('../features/account/routes/AccountRouter') );
const Purcharse = lazy(()=>import('../features/purchase/routes/PurchaseRouter'));

const AppRouter = () => {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <BrowserRouter>
        <Routes>

            <Route path='/auth/*' element={<Auth/>}></Route>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path='alumnos' element={<Students/>}/>
              <Route path='alumnos/crear-alumno' element={<CreateStudents/>}/>
              <Route path='alumnos/:idAlumno' element={<EditStudent/>}/>
              <Route path='registro-pagos' element={<RegisterStudents/>}/>
              <Route path='cuenta/*' element={<Account/>}/>
              <Route path='comprar/*' element={<Purcharse/>}/>
              <Route path='*' element={<NotFound/>}/>
              <Route/>
            </Route>
            

            
        </Routes>
    </BrowserRouter>
    </Suspense>
  )
}

export default AppRouter;
