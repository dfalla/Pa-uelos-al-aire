import PurchaseHttp from '../../../features/purchase/http/PurchaseHttp';
import { purchaseSlice } from './reducer';

const fetchStep1Params = () => {
  return (dispatch, getState) => {
    const { isParamsLoaded } = getState().purchase;

    if (isParamsLoaded) return;

    dispatch(PurchaseActions.loadStep1Params())
    
    PurchaseHttp.getStep1Params()
      .then(res => {
        dispatch(PurchaseActions.setStep1Params(res))
      })
  }
}

const PurchaseActions = {
  ...purchaseSlice.actions,
  fetchStep1Params
}

export default PurchaseActions



// import PurchaseHttp from '../../../features/purchase/http/PurchaseHttp';

// export const PURCHASE_ACTIONS = {
//     SET_STEP_1: '[PURCHASE] SET STEP 1',
//     SET_STEP_2: '[PURCHASE] SET STEP 2',
//     SET_STEP_1_PARAMS: '[PURCHASE] SET STEP 1 PARAMS',
//     LOAD_STEP_1_PARAMS: '[PURCHASE] LOADING'
// }

// const setStep1 = (payload) => ({type: PURCHASE_ACTIONS.SET_STEP_1, payload});
// const setStep2 = (payload) => ({type: PURCHASE_ACTIONS.SET_STEP_2, payload});
// const setStep1Params = (payload) => ({type: PURCHASE_ACTIONS.SET_STEP_1_PARAMS, payload});
// const startLoadingStep1Params = () => ({type: PURCHASE_ACTIONS.LOAD_STEP_1_PARAMS}); 

// const loadedStep1Params = () =>{
//     return (dispatch, getState) => {
//       const { isParamsLoaded } = getState().purchase;
  
//       if( isParamsLoaded ) return;
  
//       dispatch(startLoadingStep1Params());
//       PurchaseHttp.getStep1Params().then(res=>{
//         dispatch(setStep1Params(res));
//       })
//     }
//   }


// export const PurchaseActions = {
//     setStep1,
//     setStep2,
//     setStep1Params,
//     loadedStep1Params
// }