import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  width: 400px;
  height: auto;
`;

export const Heading = styled.h1`
  margin: 10px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
`;

export const Input = styled.input`
  height: 30px;
  width: 90%;
  margin: 10px 0;

  &:focus {
    border: none;
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

export const Select = styled.select`
  width: 90%;
  height: 30px;
  margin: 10px 0;
`;

export const InputButton = styled.input``;

export const ButtonArea = styled.div`
  display: flex;
  /* padding: 0 20px; */
  justify-content: space-around;
  width: 90%;
`;

export const UpdateButton = styled.input`
  border: none;
  background-color: lightgreen;
  border-radius: 4px;
`;

export const CancelButton = styled.button`
  border: none;
  background-color: lightcoral;
  border-radius: 4px;
`;

export const P = styled.p`
  color: red;
  margin-top: -10px;
  margin-bottom: 0;
`;

export const MobileNumberArea = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  width: 90%;
  margin: 10px 0;
`;

export const InputLeft = styled.input`
  height: 30px;
  width: 19%;
  height: 100%;

  &:focus {
    border: none;
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

export const InputRight = styled.input`
  height: 30px;
  width: 80%;
  height: 100%;

  &:focus {
    border: none;
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

export const SelectLeft = styled.select`
  height: 30px;
  width: 20%;
  height: 100%;
`;
