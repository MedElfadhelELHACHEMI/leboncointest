import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMessages } from "./inboxSlice";
import { selectMessages, selectError, selectLoading,selectUser } from "./inboxSlice";
import Styled from "./inbox.styled";
import UserMessage from "../../molecules/userMessage/userMessage";
import MessageInput from "../../molecules/messageInput/messageInput";
import { groupByDate } from "../../../utils/date";

const Inbox = props => {
  const dispatch = useDispatch();
  const [sortedMessages, setSortedMessages] = useState({});
  const messages = useSelector(selectMessages);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (messages.length === 0) {
      dispatch(fetchMessages(user.user_id));
    }
  }, []);
  useEffect(() => {
    setSortedMessages(groupByDate(messages));
  }, [messages]);
  return (
    <Styled>
      <Styled.MessagesContainer>
        {sortedMessages &&
          Object.keys(sortedMessages).map(key => (
            <React.Fragment key={key}>
              <Styled.DateDivider>{key}</Styled.DateDivider>
              {sortedMessages[key].map(message => (
                <UserMessage
                  key={message.id}
                  message={message}
                  side={message.user_id === user.user_id ? "current" : "other"}
                />
              ))}
            </React.Fragment>
          ))}
        <MessageInput onPost={() => console.log("changed")} />
      </Styled.MessagesContainer>
    </Styled>
  );
};

export default Inbox;
