import styled from "styled-components";

const Input = styled.input`
  width: 50vw;
  height: 60px;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px;
  margin-bottom: 25px;

  ::placeholder {
    padding: 20px;
    font-size: 14px;
    color: #9c9c9c;
  }
`;

export default Input;
