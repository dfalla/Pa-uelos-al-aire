import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import LayoutStepper from './LayoutStepper';
import LayoutProvider from '../context/layoutContext/LayoutProvider';




const PurchaseLayout = () => {
  return (
    <LayoutProvider>
      <main>
        <Box
          sx={{
            maxWidth: '400px',
            margin: 'auto',
            pt: '2rem',
          }}
        >
          <LayoutStepper />
          <Box
            sx={{
              maxWidth: '95%',
              margin: 'auto',
              pt: '3rem',
            }}
          >
            
              <Outlet />
            
          </Box>
        </Box>
      </main>
    </LayoutProvider>
    
  );
};

export default PurchaseLayout;
