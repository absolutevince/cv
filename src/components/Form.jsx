import { useState } from "react";
import General from "./General";
import Experience from "./Experience";
import Education from "./Education";
import CustomButton from "./CustomButton";
import Skills from "./Skills";

export default function Form({ onSubmit }) {
  const [data, setData] = useState({
    general: {},
    education: [],
    experience: [],
    skills: [],
  });

  const handleDataChange = (property, newData) => {
    setData({ ...data, [property]: newData });
  };

  return (
    <section id="form">
      <General onSubmit={handleDataChange} />
      <Education onSubmit={handleDataChange} />
      <Experience onSubmit={handleDataChange} />
      <Skills onSubmit={handleDataChange} />
      <CustomButton
        onClick={() => onSubmit(data)}
        className="form_submit"
        text="Generate"
      />
    </section>
  );
}
