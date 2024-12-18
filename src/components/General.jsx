import { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

export default function General({ onSubmit }) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    phoneNumber: "",
    email: "",
  });

  const handleDataChange = (e, inputName) => {
    e.preventDefault();
    const newData = { ...data, [inputName]: e.target.value };
    setData(newData);
  };

  return (
    <section className="general block">
      <h2 className="heading">General</h2>

      <CustomInput
        type="text"
        placeHolder="Jane"
        label="First Name"
        value={data.firstName}
        property="firstName"
        onChange={handleDataChange}
      />
      <CustomInput
        type="text"
        placeHolder="Doe"
        label="Last Name"
        value={data.lastName}
        property="lastName"
        onChange={handleDataChange}
      />
      <CustomInput
        type="number"
        placeHolder="25"
        label="Age"
        value={data.age}
        property="age"
        onChange={handleDataChange}
      />
      <CustomInput
        type="tel"
        placeHolder="555-5555-555"
        label="Phone Number"
        value={data.phoneNumber}
        property="phoneNumber"
        onChange={handleDataChange}
      />
      <CustomInput
        type="email"
        placeHolder="janedoe@example.com"
        label="Email"
        value={data.email}
        property="email"
        onChange={handleDataChange}
      />
      <CustomButton text="Save" onClick={() => onSubmit("general", data)} />
    </section>
  );
}
