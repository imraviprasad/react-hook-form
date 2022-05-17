import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.button`
  margin: 20px 0;
  font-size: 20px;
  border-radius: 4px;
  border: none;
  background-color: skyblue;
`;

export const TableContainer = styled.table`
  width: 100%;
  /* border-collapse: collapse; */
  /* background-color: pink; */
`;

export const Thead = styled.thead`
  height: 60px;
  background-color: aquamarine;
  border: 1px solid black;
  border-radius: 4px;
`;

export const Tbody = styled.tbody`
  height: auto;
  background-color: whitesmoke;
  border: 1px solid black;
`;

export const Tr = styled.tr`
  height: 50px;
  border-bottom: 1px solid;
`;

export const EditButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: lightgreen;
`;

export const DeleteButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: lightcoral;
  margin-left: 10px;
`;
