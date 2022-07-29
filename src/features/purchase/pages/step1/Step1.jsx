import { useEffect } from 'react';
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useLayoutContext from '../../context/layoutContext/useLayoutContext';
import usePurchase from '../../../../core/store/purchase/usePurchase';
import  PurchaseActions  from '../../../../core/store/purchase/actions';




const validationSchema = Yup.object().shape({
  plan: Yup.string().required(),
  account: Yup.string().required()
});

const Step1 = () => {
  
  const navigate = useNavigate();
  const { setActiveStep } = useLayoutContext();
  const { step1, params } = usePurchase();
  const dispatch = useDispatch();

  

  const{ handleSubmit, getFieldProps, values } = useFormik({
    initialValues: {
      plan: step1.plan,
      account: step1.account
    },
    validationSchema,
    onSubmit: ()=>{
      navigate('../paso-2');
    }
  });

  useEffect(() => {
    dispatch(PurchaseActions.fetchStep1Params())
  }, [dispatch])


  useEffect(() => {
    setActiveStep(0)
  }, [ setActiveStep ]);

  useEffect(() => {
    dispatch(PurchaseActions.setStep1(values))
  }, [dispatch, values]);

  


  return (
    <form onSubmit={ handleSubmit }>
      <FormGroup sx={{ gap: '1rem' }}>
        <FormLabel>Ingrese los siguientes datos</FormLabel>
        <FormControl>
          <InputLabel>Plan</InputLabel>
          <Select label={'Plan'} {...getFieldProps('plan')}>  
            <MenuItem value=''>Seleccione un plan</MenuItem>
            {
              params.plans.map((plan)=>(
                <MenuItem key={plan.id} value={plan.id}>{plan.label}</MenuItem>
              ))
            }
          </Select>
          
        </FormControl>
        <FormControl>
          <InputLabel>Cuenta</InputLabel>
          <Select label={'Cuenta'} {...getFieldProps('account')}>
            <MenuItem value=''>Seleccione una cuenta</MenuItem>
            {
              params.accounts.map((account)=>(
                <MenuItem key={account.id} value={account.id}>{account.label}</MenuItem>
              ))
            }
          </Select>
        </FormControl>

        <Button type='submit'>Continuar</Button>
      </FormGroup>
    </form>
  );
}

export default Step1