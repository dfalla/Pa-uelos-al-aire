import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  step1: {
    plan: '',
    account: ''
  },
  step2: {
    termsConditions: false,
    offers: false
  },
  params: {
    plans: [],
    accounts: []
  },
  isParamsLoaded: false,
  isParamsLoading: false,
}

export const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    setStep1: (state, action) => {
      state.step1 = action.payload
    },
    setStep2: (state, action) => {
      state.step2 = action.payload
    },
    loadStep1Params: (state) => {
      state.isParamsLoading = true
    },
    setStep1Params: (state, action) => {
      state.isParamsLoading = false
      state.isParamsLoaded = true
      state.params =  action.payload
    }
  }
})

export default purchaseSlice.reducer;


// import { PURCHASE_ACTIONS } from "./actions";

// const initialState = {
//     step1: {
//         plan: '',
//         account: ''
//     },
//     step2: {
//         termsConditions: false,
//         offers: false
//     },
//     params:{
//         plans: [],
//         accounts: []
//     },
//     isParamsLoaded: false,
//     isParamsLoading: false
// };

// export const purchaseReducer = (state = initialState, action) => {
//     switch(action.type){
//         case PURCHASE_ACTIONS.SET_STEP_1:
//             return {
//                 ...state,
//                 step1: action.payload
//             }
//         case PURCHASE_ACTIONS.SET_STEP_2:
//             return {
//                 ...state,
//                 step2: action.payload
//             }

//         case PURCHASE_ACTIONS.SET_STEP_1_PARAMS:
//             return {
//                 ...state,
//                 params: action.payload,
//                 isParamsLoaded: true
//             }
//         case PURCHASE_ACTIONS.LOAD_STEP_1_PARAMS:
//                 return {
//                   ...state,
//                   iseParamsLoading: true
//                 }

//         default:
//             return { ...state }
//     }

// }