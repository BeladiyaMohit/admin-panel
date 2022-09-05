import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects'
import { LoginConstant } from '../../Constants/Constant';
import { BASE_URL} from '../../../containers/Constant/Constant';
// import { ProducteFetch } from '../requests/ProducteFetch';
const url = `${BASE_URL}login`
// import {Import_Type_Axios_Get, Import_Type_Axios_Post} from "../SagaHelper"


function* Login_Request_Api(action) {
    let Data = yield axios.post(url,action.payload)
    yield put({ type: LoginConstant.SAGA_LOGIN_SUCCESS, ApiData: Data.data })
}

export function* LoginSaga() {
    yield takeEvery(LoginConstant.LOGIN_REQUEST, Login_Request_Api)
}
