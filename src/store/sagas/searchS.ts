import { call, put, takeEvery } from 'redux-saga/effects'
import { getSearch } from '../../api/search'
import {
  GET_SEARCH_REQUESTED,
  GET_SEARCH_FAILED,
  GET_SEARCH_SUCCEEDED
} from '../reducers/search'

function* getSearchS(action:{type: string, payload:object}) {
  try {
    const response = yield call(getSearch, action.payload)
    yield put({type: GET_SEARCH_SUCCEEDED.type, payload: response.data})
  } catch (e) {
    yield put({type: GET_SEARCH_FAILED.type, message: e.message})
  }
}

function* searchS() {
  yield takeEvery(GET_SEARCH_REQUESTED.type, getSearchS)
}

export default searchS