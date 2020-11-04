import styled from "styled-components";
const Styled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  background-color: #f9f9f9;
`;
Styled.MessagesContainer = styled.div`
  width: 62%;
  max-height: 90vh;
  overflow-y: scroll;
  display: flex;
  flex-flow: column nowrap;
  margin: 1rem auto;
  background-color: white;
  box-shadow: 0 0.2rem 0.4rem 0 rgba(139, 159, 196, 0.2);
`;

Styled.DateDivider = styled.div`
  min-height: 30px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 6px 0;
  color: #9296b3;
  opacity: 0.7;
`;

export default Styled;
