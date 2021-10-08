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
const LOAD_ANSWER = 'question/LOAD_ANSWER';
const UNDO_ANSWER = 'question/UNDO_ANSWER';

/* DEFINE ACTION */
export const getList = createAction(GET_LIST, () => ({}));
export const addAnswer = createAction(ADD_ANSWER, ({ idx, value }) => ({
  idx,
  value,
}));
export const loadAnswer = createAction(LOAD_ANSWER, ({ answer }) => ({
  answer,
}));
export const undoAnswer = createAction(UNDO_ANSWER, ({ idx }) => ({ idx }));

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
  answer: [
    ...Array.from(Array(16).keys()).map((iter) => ({
      idx: iter + 1,
      isAnswered: false,
      value: null,
    })),
  ],
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
  },
  initialState,
);
export default question;
