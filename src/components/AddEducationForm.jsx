import { useState } from "react";
import CustomInput from "./CustomInput";

export default function AddEducationForm() {
  const [data, setData] = useState({
    school: "",
    degree: "",
    dateStarted: "",
    dateEnded: "",
    description: "",
  });

  const handleDataChange = (property, newData) => {
    setData({ ...data, [property]: newData });
  };
  return (
    <div className="add_education_form block">
      <CustomInput
        type="text"
        label="University"
        value={data.school}
        onChange={(e) => handleDataChange("school", e.target.value)}
      />
      <CustomInput
        type="text"
        label="Degree"
        value={data.degree}
        onChange={(e) => handleDataChange("degree", e.target.value)}
      />
      <CustomInput
        type="text"
        label="Started"
        value={data.dateStarted}
        onChange={(e) => handleDataChange("dateStarted", e.target.value)}
      />
      <CustomInput
        type="text"
        label="Ended"
        value={data.dateEnded}
        onChange={(e) => handleDataChange("dateEnded", e.target.value)}
      />
      <label htmlFor="description_input">Description</label>
      <textarea
        onChange={(e) => handleDataChange("description", e.target.value)}
      ></textarea>
    </div>
  );
}
