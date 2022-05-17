import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import {
  Container,
  Heading,
  Form,
  Input,
  Select,
  InputButton,
  P,
  MobileNumberArea,
  InputLeft,
  // SelectLeft,
  InputRight,
} from "./AddContacts.styled";

const AddContact = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  // const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   const data = require("./CountryCodes.json");
  //   console.log(data);
  //   setCountries(data);
  // }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  // const watchAllFields = watch();

  const onSubmit = (data) => {
    let id = contacts.length < 1 ? 0 : contacts[contacts.length - 1].id + 1;
    console.log(data);
    console.log(id);
    let dataId = { id: id };
    data = { ...dataId, ...data };
    console.log(data);
    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("data added successfully");
    history.push("/");
  };

  return (
    <Container>
      <Heading>Add Student</Heading>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="number"
          placeholder="Sign No."
          {...register("sNo", { required: true })}
        />
        {errors.sNo && <P>This field is required</P>}

        <Input
          type="text"
          label="name"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        {errors.name && <P>This field is required</P>}

        <Select {...register("subject")}>
          <option value="English">English</option>
          <option value="Tamil">Tamil</option>
          <option value="Maths">Maths</option>
          <option value="Science">Science</option>
          <option value="Social">Social</option>
        </Select>

        <Input
          type="email"
          placeholder="E-Mail"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/gm,
          })}
        />
        {errors.email && <P>Enter a valid E-Mail</P>}

        <MobileNumberArea>
          {/* <SelectLeft>
            {countries.map((item) => {
              return <option value={item.dial_code}>{item.dial_code}</option>;
            })}
          </SelectLeft> */}

          <InputLeft
            type="tel"
            placeholder="countrycode"
            {...register("countrycode", {
              required: true,
              pattern: /^[0-9]{2}$/gm,
            })}
          />

          <InputRight
            type="tel"
            placeholder="Mobile No."
            {...register("mobilenumber", {
              required: true,
              pattern: /^[1-9]{1}[0-9]{9}$/gm,
            })}
          />
        </MobileNumberArea>
        {errors.countrycode && <P>Enter a valid country code</P>}
        {errors.mobilenumber && <P>Enter a valid Mobile No.</P>}

        <Input
          type="number"
          placeholder="Mark"
          {...register("mark", { required: true, min: 0, max: 100 })}
        />
        {errors.mark && <P>Enter a valid Mark</P>}

        <Input
          type="number"
          placeholder="Age"
          {...register("age", { required: true, min: 1, max: 99 })}
        />
        {errors.age && <P>Enter a valid Age</P>}

        <Input
          type="file"
          max-file-size="1024"
          accept=".txt,image/png,image/jpeg"
          {...register("uploadfile", { required: true })}
        />
        {errors.uploadfile && <P>upload a valid file</P>}

        <InputButton type="submit" value="Add Student" />
      </Form>
    </Container>
  );
};

export default AddContact;
