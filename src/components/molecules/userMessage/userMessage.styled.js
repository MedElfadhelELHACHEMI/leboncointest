import styled from "styled-components";
const Styled = styled.div`
  height: auto;
  min-height: 8rem;
  display: flex;
  flex-flow: ${props => (props.side === "current" ? "row-reverse" : "row")}
    nowrap;
  justify-content: flex-start;
  align-items: center;
`;
export default Styled;
