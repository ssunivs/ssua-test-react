import { createAction, handleActions } from 'redux-actions';
import { takeEvery } from 'redux-saga/effects';
import * as questionAPI from '../lib/api/question';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

/* DEFINE ACTION_NAMES */
const [GET_LIST, GET_LIST_SUCCESS, GET_LIST_FAILURE] =
  createRequestActionTypes('question/GET_LIST');

/* DEFINE ACTION */
export const getList = createAction(GET_LIST, () => ({}));

/* DEFINE SAGAS */
const getListSaga = createRequestSaga(GET_LIST, questionAPI.list);

/* GATHERING SAGAS */
export function* questionSaga() {
  yield takeEvery(GET_LIST, getListSaga);
}

/* INIT & HANDLE_ACTIONS */
const initialState = {
  list: [],
  questionError: null,
};

const question = handleActions(
  {
    [GET_LIST_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
    }),
    [GET_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      questionError: error,
    }),
  },
  initialState,
);

export default question;
