import styled from "styled-components";
const Styled = styled.form`
  position: fixed;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 50%;
  background-color: rgb(240, 243, 247);
  border-radius: 1.8rem;
  display: flex;
  flex-direction: row;
  height: 2.6rem;
  padding-left: 1.2rem;
  margin: auto;
`;
Styled.Input = styled.input`
  font-size: 1.4rem;
  line-height: 2.4rem;
  text-transform: none;
  background-color: rgb(240, 243, 247);
  color: rgb(38, 48, 60);
  border: 0px;
  border-radius: 1.8rem;
  height: auto;
  letter-spacing: normal;
  padding-left: 0.8rem;
  outline-width: 0;
  width: calc(100% - 24px);
`;
Styled.Logo = styled.figure`
  align-items: center;
  background-color: transparent;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export default Styled;
