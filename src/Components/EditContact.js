import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import {
  Container,
  Heading,
  Form,
  Input,
  Select,
  ButtonArea,
  UpdateButton,
  CancelButton,
  P,
  MobileNumberArea,
  InputRight,
  InputLeft,
} from "./AddContacts.styled";

const EditContact = () => {
  const { id } = useParams();

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  const preloadedValues = {
    sNo: currentContact.sNo,
    name: currentContact.name,
    subject: currentContact.subject,
    email: currentContact.email,
    mobilenumber: currentContact.mobilenumber,
    countrycode: currentContact.countrycode,
    mark: currentContact.mark,
    age: currentContact.age,
    // uploadfile: currentContact.uploadfile,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: preloadedValues,
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log(currentContact);
    console.log(id);
    let dataId = { id: parseInt(id) };
    data = { ...dataId, ...data };
    console.log(data);
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Data updated successfully!!");
    history.push("/");
  };

  return (
    <Container>
      <Heading>Edit Student {id}</Heading>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="number"
          placeholder="Sign No."
          ref={register}
          {...register("sNo", { required: true })}
        />
        {errors.sNo && <P>This field is required</P>}

        <Input
          type="text"
          placeholder="name"
          ref={register}
          {...register("name", { required: true })}
        />
        {errors.name && <P>This field is required</P>}

        <Select ref={register} {...register("subject")}>
          <option value="English" selected="selected">
            English
          </option>
          <option value="Tamil">Tamil</option>
          <option value="Maths">Maths</option>
          <option value="Science">Science</option>
          <option value="Social">Social</option>
        </Select>

        <Input
          // type="email"
          ref={register}
          placeholder="E-Mail"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/gm,
          })}
        />
        {errors.email && <P>Enter a valid E-Mail</P>}

        <MobileNumberArea>
          <InputLeft
            type="tel"
            ref={register}
            placeholder="countrycode"
            {...register("countrycode", {
              required: true,
              pattern: /^\d{2}$/gm,
            })}
          />

          <InputRight
            type="tel"
            ref={register}
            placeholder="Mobile No."
            {...register("mobilenumber", {
              required: true,
              pattern: /^[1-9]{1}[0-9]{9}$/gm,
            })}
          />
        </MobileNumberArea>

        <Input
          type="tel"
          placeholder="Mark"
          ref={register}
          {...register("mark", { required: true, min: 0, max: 100 })}
        />
        {errors.mark && <P>Enter a valid Mark</P>}

        <Input
          type="number"
          placeholder="Age"
          ref={register}
          {...register("age", { min: 1, max: 100 })}
        />
        {errors.age && <P>Enter a valid Age</P>}

        <Input
          type="file"
          ref={register}
          max-file-size="1024"
          accept=".txt,image/png,image/jpeg"
          {...register("uploadfile", { required: true })}
        />
        {errors.uploadfile && <P>upload a valid file</P>}

        <ButtonArea>
          <UpdateButton type="submit" value="Update Student" />
          <Link to="/">
            <CancelButton>Cancel</CancelButton>
          </Link>
        </ButtonArea>
      </Form>
    </Container>
  );
};

export default EditContact;
