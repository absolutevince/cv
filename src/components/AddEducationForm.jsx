import { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

export default function AddEducationForm({ onAdd, onClose }) {
  const [data, setData] = useState({
    school: "",
    degree: "",
    dateStarted: "",
    dateEnded: "",
    description: "",
    id: "",
  });

  const handleDataChange = (property, newData) => {
    setData({ ...data, [property]: newData });
  };

  const handleAdd = (d) => {
    const dataIdAdded = { ...data, id: crypto.randomUUID() };
    onAdd(dataIdAdded);
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
        type="date"
        label="Date Started"
        value={data.dateStarted}
        onChange={(e) => handleDataChange("dateStarted", e.target.value)}
      />
      <CustomInput
        type="date"
        label="Date Ended"
        value={data.dateEnded}
        onChange={(e) => handleDataChange("dateEnded", e.target.value)}
      />
      <label htmlFor="description_input">Description</label>
      <textarea
        onChange={(e) => handleDataChange("description", e.target.value)}
      ></textarea>
      <CustomButton
        className="add_education_add_button"
        text="Add"
        onClick={() => handleAdd(data)}
      />
      <CustomButton
        className="add_education_close_button"
        text="Close"
        onClick={onClose}
      />
    </div>
  );
}
