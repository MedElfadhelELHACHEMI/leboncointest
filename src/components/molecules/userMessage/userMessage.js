import React from "react";
import PropTypes from "prop-types";
import Message from "../../atoms/message/message";
import Avatar from "../../atoms/avatar/avatar";
import Styled from "./userMessage.styled";

const UserMessage = props => {
  return (
    <Styled side={props.side}>
      <Avatar src={props.message.user_avatar} alt={props.message.Kyle} />
      <Message message={props.message.message} />
    </Styled>
  );
};

UserMessage.propTypes = {
  message: PropTypes.any,
  side: PropTypes.oneOf(["current", "other"])
};

export default UserMessage;
