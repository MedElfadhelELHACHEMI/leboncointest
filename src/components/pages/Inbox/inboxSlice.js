import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
export const inboxSlice = createSlice({
  name: "inbox",
  initialState: {
    messages: [],
    loading: false,
    error: null,
    user: {
      user_id: 320,
      user_avatar: "https://source.unsplash.com/NohB3FJSY90/128x128"
    }
  },
  reducers: {
    fetchMessages: (state, action) => {
      state.loading = true;
    },
    fetchMessagesSuccess: (state, action) => {
      state.messages = action.payload;
      state.loading = false;
    },
    fetchMessagesFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    submitMessage: (state, action) => {
      state.loading = true;
    },
    submitMessageSuccess: (state, action) => {
      state.loading = false;
      state.messages.push({
        id: state.messages.length + 1,
        message: action.payload.message,
        status: action.payload.status,
        user_id: action.payload.user_id,
        user_avatar: "https://source.unsplash.com/kVg2DQTAK7c/128x128",
        created_at: dayjs()
      });
    },
    submitMessageFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const {
  fetchMessages,
  fetchMessagesSuccess,
  fetchMessagesFailure,
  submitMessage,
  submitMessageFailure,
  submitMessageSuccess
} = inboxSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectMessages = state =>
  state.inbox.messages.filter(message => message.status === "public");
// state.inbox.messages.sort((a, b) =>
//   dayjs(a.created_at, "DD/MM/YYYY").diff(dayjs(b.created_at, "DD/MM/YYYY"))
// );
export const selectLoading = state => state.inbox.loading;
export const selectError = state => state.inbox.error;
export const selectUser = state => state.inbox.user;

export default inboxSlice.reducer;
