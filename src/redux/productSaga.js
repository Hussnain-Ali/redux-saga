import {put, takeEvery} from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant';
// here the function* are callled generator functions
// these functions are used to handle the async operation
function* getProducts() {
    // yeild is also a async operation 
    let data = yield fetch('http://localhost:3500/product');
    data =yield data.json();
     yield put({ type: SET_PRODUCT_LIST, data })
}

function* productSaga()
{
     yield takeEvery(PRODUCT_LIST, getProducts)
}
export default productSaga;
