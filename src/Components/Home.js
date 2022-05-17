import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import {
  Container,
  Heading,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  EditButton,
  DeleteButton,
} from "./Home.styled";

const Home = () => {
  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("contact deleted successfully!");
  };

  return (
    <Container>
      {/* <div> */}
      <Link to="/add">
        <Heading>Add Student</Heading>
      </Link>
      {/* <div> */}
      <TableContainer>
        <Thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">S.No.</th>
            <th scope="col">Name</th>
            <th scope="col">Subject</th>
            <th scope="col">E-Mail</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Mark</th>
            <th scope="col">Age</th>
            <th scope="col">Actions</th>
          </tr>
        </Thead>
        <Tbody>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <Tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.sNo}</td>
                <td>{contact.name}</td>
                <td>{contact.subject}</td>
                <td>{contact.email}</td>
                <td>
                  +{contact.countrycode} {contact.mobilenumber}
                </td>
                <td>{contact.mark}</td>
                <td>{contact.age}</td>

                <td>
                  <Link to={`/edit/${contact.id}`}>
                    <EditButton>Edit</EditButton>
                  </Link>
                  <DeleteButton
                    type="button"
                    onClick={() => deleteContact(contact.id)}
                  >
                    Delete
                  </DeleteButton>
                </td>
              </Tr>
            ))
          ) : (
            <tr>
              <th>No contacts found</th>
            </tr>
          )}
        </Tbody>
      </TableContainer>
      {/* </div> */}
      {/* </div> */}
    </Container>
  );
};

export default Home;
