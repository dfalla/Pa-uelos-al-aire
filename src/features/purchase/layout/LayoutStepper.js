import { Step, StepLabel, Stepper } from '@mui/material';
import useLayoutContext from '../context/layoutContext/useLayoutContext';

const LayoutStepper = () => {
  const { activeStep } = useLayoutContext();
  return (
    <Stepper activeStep={ activeStep }>
      <Step>
        <StepLabel>Paso 1</StepLabel>
      </Step>
      <Step>
        <StepLabel>Paso 2</StepLabel>
      </Step>
    </Stepper>
  );
};

export default LayoutStepper;
