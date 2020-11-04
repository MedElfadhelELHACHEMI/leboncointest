import React from 'react';
import PropTypes from 'prop-types';
import Styled from "./message.styled";

const Message = props => {
	return (
		<Styled>
			{props.message}
		</Styled>
	);
};

Message.propTypes = {
	message: PropTypes.string
};

export default Message;
