import { call, put, takeEvery } from 'redux-saga/effects'
import { getSearch } from '../../api/search'

function* getSearchS(action:{type: string, payload:object}) {
  try {
    const user = yield call(getSearch, action.payload);
    yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
    yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* searchS() {
  yield takeEvery("GET_SEARCH_REQUESTED", getSearchS);
}

export default searchS;