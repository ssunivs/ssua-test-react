import { createAction, handleActions } from 'redux-actions';
import { takeEvery, takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import * as questionAPI from '../lib/api/question';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

/* DEFINE ACTION_NAMES */
const [GET_LIST, GET_LIST_SUCCESS, GET_LIST_FAILURE] =
  createRequestActionTypes('question/GET_LIST');
const [GET_RESULT, GET_RESULT_SUCCESS, GET_RESULT_FAILURE] =
  createRequestActionTypes('question/GET_RESULT');
const ADD_ANSWER = 'question/ANSWER';
const LOAD_ANSWER = 'question/LOAD_ANSWER';
const UNDO_ANSWER = 'question/UNDO_ANSWER';
const RESET_ANSWER = 'question/RESET_ANSWER';

/* DEFINE ACTION */
export const getList = createAction(GET_LIST, () => ({}));
export const getResult = createAction(GET_RESULT, ({ answer }) => ({ answer }));
export const addAnswer = createAction(ADD_ANSWER, ({ idx, value }) => ({
  idx,
  value,
}));
export const loadAnswer = createAction(LOAD_ANSWER, ({ answer }) => ({
  answer,
}));
export const undoAnswer = createAction(UNDO_ANSWER, ({ idx }) => ({ idx }));
export const resetAnswer = createAction(RESET_ANSWER, () => ({}));

/* DEFINE SAGAS */
const getListSaga = createRequestSaga(GET_LIST, questionAPI.list);
const getResultSaga = createRequestSaga(GET_RESULT, questionAPI.result);

/* GATHERING SAGAS */
export function* questionSaga() {
  yield takeEvery(GET_LIST, getListSaga);
  yield takeLatest(GET_RESULT, getResultSaga);
}

/* INIT & HANDLE_ACTIONS */
const initialState = {
  list: [],
  questionError: null,
  answer: [
    ...Array.from(Array(16).keys()).map((iter) => ({
      idx: iter + 1,
      isAnswered: false,
      value: null,
    })),
  ],
  result: {
    type: '',
    description: '',
  },
  resultError: null,
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
    [GET_RESULT_SUCCESS]: (state, { payload: { title, description } }) => ({
      ...state,
      result: { title, description },
    }),
    [GET_RESULT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      resultError: error,
    }),
    [ADD_ANSWER]: (state, { payload: { idx, value } }) =>
      produce(state, (draft) => {
        draft.answer[idx - 1].isAnswered = true;
        draft.answer[idx - 1].value = value;
      }),
    [LOAD_ANSWER]: (state, { payload: { answer } }) => ({
      ...state,
      answer: [...answer],
    }),
    [UNDO_ANSWER]: (state, { payload: { idx } }) =>
      produce(state, (draft) => {
        draft.answer[idx - 1].isAnswered = false;
        draft.answer[idx - 1].value = null;
      }),
    [RESET_ANSWER]: (state) => ({
      ...state,
      answer: initialState.answer,
    }),
  },
  initialState,
);
export default question;
