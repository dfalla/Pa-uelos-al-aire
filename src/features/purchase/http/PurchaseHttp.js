import Http from '../../../common/http';

const ENDPOINT = 'http://localhost:3001/step-1';

const getStep1Params = () =>{
    return Http.get(ENDPOINT);
}

const PurchaseHttp = {
    getStep1Params
};

export default PurchaseHttp;