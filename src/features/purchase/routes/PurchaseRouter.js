import { Navigate, Route, Routes } from 'react-router-dom'
import usePurchase from '../../../core/store/purchase/usePurchase'
import PurchaseLayout from '../layout/Layout'
import Step1 from '../pages/step1/Step1'
import Step2 from '../pages/step2/Step2'


const Protected = ({ children }) => {
  const { step1 } = usePurchase();
  if(!(step1.plan && step1.account)) return <Navigate to={'../paso-1'} replace/>
  return children
}

const PurchaseRouter = () => {
  return (
   
      <Routes>
          <Route path='/' element={<PurchaseLayout/>}>
              <Route index element={<Navigate to='paso-1' replace/>}/>
              <Route path='paso-1' element={<Step1/>}/>
              <Route 
                path='paso-2' 
                element={
                  <Protected>
                    <Step2/>
                  </Protected>
                }
              />
          </Route>
      </Routes>
    
  )
}

export default PurchaseRouter