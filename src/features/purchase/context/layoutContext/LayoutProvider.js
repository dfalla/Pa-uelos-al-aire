import React, { useState } from 'react'
import LayoutContext from './LayoutContext'

const LayoutProvider = ({ children }) => {
    const [activeStep, setActiveStep] = useState(0);
  return (
    <LayoutContext.Provider value={{ activeStep, setActiveStep }}>
        { children }
    </LayoutContext.Provider>
  )
}

export default LayoutProvider