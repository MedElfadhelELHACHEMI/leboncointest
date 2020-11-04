import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import Styled from "./messageInput.styled";
import Lock from "../../Icons/lock";
import { submitMessage } from "../../pages/Inbox/inboxSlice";

const MessageInput = props => {
  const [isPublic, setIsPublic] = useState(true);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  return (
    <Styled
      action="#"
      onSubmit={e => {
        e.preventDefault();
        console.log(e.target[0].value);
        dispatch(
          submitMessage({
            message: e.target[0].value,
            status: isPublic ? "public" : "private"
          })
        );
      }}
    >
      <Styled.Input
        value={message}
        type="text"
        onChange={e => setMessage(e.target.value)}
      />
      <Styled.Logo onClick={() => setIsPublic(!isPublic)}>
        <Lock
          height="24"
          width="24"
          color={isPublic ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.8)"}
        />
      </Styled.Logo>
    </Styled>
  );
};

MessageInput.propTypes = {
  onPost: PropTypes.func.isRequired
};

export default MessageInput;
