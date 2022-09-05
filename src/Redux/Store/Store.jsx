import {configureStore} from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import RootReducer from "../Reducers/RootReducer"
import { RootSaga } from "../Saga/RootSaga"

const Saga=createSagaMiddleware()

export const Store=configureStore({
    reducer:RootReducer,
    middleware:()=>[Saga]
})


Saga.run(RootSaga)