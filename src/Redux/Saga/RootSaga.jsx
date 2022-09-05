import {all } from 'redux-saga/effects'
import {LoginSaga} from './handler/LoginHandler'

export function* RootSaga(){
    yield all([LoginSaga()])
}
