import React from "react";
import PropTypes from "prop-types";
import Styled from "./avatar.styled";

const Avatar = props => {
	return <Styled src={props.src} alt={props.alt} />;
};

Avatar.propTypes = {
	src: PropTypes.string,
	alt:PropTypes.string,
};

export default Avatar;
