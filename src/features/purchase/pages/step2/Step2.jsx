import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import useLayoutContext from '../../context/layoutContext/useLayoutContext';
import { useEffect } from 'react';
import usePurchase from '../../../../core/store/purchase/usePurchase';
import PurchaseActions  from '../../../../core/store/purchase/actions';




const Step2 = () => {
  const navigate = useNavigate();
  const { setActiveStep } = useLayoutContext();
  const { step2 } = usePurchase();
  const dispatch = useDispatch()

  const goBackStep1 = () =>{
    navigate('../paso-1')
  }

  const{ values, handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      termsConditions: step2.termsConditions,
      offers: step2.offers
    }, 
  })

  useEffect(() => {
    setActiveStep(1)
  }, [ setActiveStep ]);

  useEffect(() => {
    dispatch(PurchaseActions.setStep2(values))
  }, [values, dispatch])

  


  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant='h6'>Resumen: </Typography>
          <Typography>Plan: Mensual S/12.99</Typography>
          <Typography>Cuenta: 191-*********-98</Typography>
        </CardContent>
      </Card>

      <form onSubmit={ handleSubmit }>
        <FormGroup>
          <FormControlLabel control={<Checkbox checked={values.termsConditions} {...getFieldProps('termsConditions')} />} label={'Acepta los terminos y condiciones'} />
          <FormControlLabel control={<Checkbox checked={values.offers} {...getFieldProps('offers')}/>} label={'Acepta suscribirse para recibir ofertas'} />
          <Box sx={{ textAlign: 'center' }}>
            <ButtonGroup>
              <Button type='button' onClick={ goBackStep1 }>Regresar</Button>
              <Button type='submit' >Comprar</Button>
            </ButtonGroup>
          </Box>
        </FormGroup>
      </form>
    </Box>
  );
}

export default Step2