import { all, fork } from 'redux-saga/effects'
import searchS from './searchS'

function* rootS() {
  yield all([
    fork(searchS)
  ])
}

export default rootS