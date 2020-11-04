import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import {
  fetchMessages,
  fetchMessagesFailure,
  fetchMessagesSuccess,
  submitMessage,
  submitMessageFailure,
  submitMessageSuccess,
  selectUser
} from "./inboxSlice";
import { API } from "../../../utils/api";

function* submitMessageWorker(action) {
  console.log(action);
  try {
    const user = yield select(selectUser);
    const req = {
      user_id: user.user_id,
      message: action.payload.message,
      status: action.payload.status
    };
    const res = yield call(API.submitMessage, req);
    console.log(res);
    yield put(submitMessageSuccess(res));
  } catch (e) {
    submitMessageFailure(e);
  }
}

function* fetchMessagesWorker(action) {
  try {
    const messages = yield call(API.fetchMessages, action.payload);
    yield put(fetchMessagesSuccess(messages));
  } catch (e) {
    yield put(fetchMessagesFailure(e));
  }
}

function* InboxSaga() {
  yield takeLatest(fetchMessages().type, fetchMessagesWorker);
  yield takeLatest(submitMessage().type, submitMessageWorker);
}

export default InboxSaga;
