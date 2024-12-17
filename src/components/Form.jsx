import { useState } from "react";
import General from "./General";
import Experience from "./Experience";
import Education from "./Education";
import CustomButton from "./CustomButton";

export default function Form({ onSubmit }) {
  const [data, setData] = useState({
    general: {},
    education: {},
    experience: {},
  });

  const handleDataChange = (property, newData) => {
    setData({ ...data, [property]: newData });
  };

  return (
    <>
      <General onSubmit={handleDataChange} />
      <Education onSubmit={handleDataChange} />
      <Experience onSubmit={handleDataChange} />
      <CustomButton
        onClick={() => onSubmit(data)}
        className="form_submit"
        text="Generate"
      />
    </>
  );
}
