import { useSelector } from 'react-redux';
import PurchaseSelector from './selector';

const usePurchase = () => useSelector(PurchaseSelector);

export default usePurchase;