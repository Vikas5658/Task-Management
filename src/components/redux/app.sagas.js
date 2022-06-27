import {takeLatest, put, call} from 'redux-saga/effects'
import { loadPostSuccess, loadPostFail } from './app.actions'
import  {loadApi}  from './api'

export function* onLoadPostStartAsync(){
    try{
        const response = yield call(loadApi);
        yield put(loadPostSuccess(response.data))
    }catch(error){
        yield put(loadPostFail(error))
    }
}

export function* onLoadPost(){
    yield takeLatest("LOAD_POST_START", onLoadPostStartAsync)
}