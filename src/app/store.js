import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import InboxSaga from "../components/pages/Inbox/inbox.saga";
import inboxSlice from "../components/pages/Inbox/inboxSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    inbox: inboxSlice
  },
  middleware: [sagaMiddleware]
});
sagaMiddleware.run(InboxSaga);
