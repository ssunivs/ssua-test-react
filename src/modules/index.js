import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import question, { questionSaga } from './question';
import loading from './loading';

const rootReducer = combineReducers({
  loading,
  question,
});

export function* rootSaga() {
  yield all([questionSaga()]);
}

export default rootReducer;
