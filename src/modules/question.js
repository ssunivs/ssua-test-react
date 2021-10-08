import { createAction, handleActions } from 'redux-actions';
import { takeEvery } from 'redux-saga/effects';
import produce from 'immer';
import * as questionAPI from '../lib/api/question';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

/* DEFINE ACTION_NAMES */
const [GET_LIST, GET_LIST_SUCCESS, GET_LIST_FAILURE] =
  createRequestActionTypes('question/GET_LIST');
const ADD_ANSWER = 'question/ANSWER';

/* DEFINE ACTION */
export const getList = createAction(GET_LIST, () => ({}));
export const addAnswer = createAction(ADD_ANSWER, ({ idx, value }) => ({
  idx,
  value,
}));

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
  answer: [],
};

const question = handleActions(
  {
    [GET_LIST_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
      answer: list.map((iter) => ({
        idx: iter.idx,
        isAnswered: false,
        value: null,
      })),
    }),
    [GET_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      questionError: error,
    }),
    [ADD_ANSWER]: (state, { payload: { idx, value } }) =>
      produce(state, (draft) => {
        draft.answer[idx - 1].isAnswered = true;
        draft.answer[idx - 1].value = value;
      }),
  },
  initialState,
);

export default question;
