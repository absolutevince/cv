import { useState } from "react";
import CustomInput from "./CustomInput";

export default function AddExperiencForm({ onSubmit, onClose }) {
  const [data, setData] = useState({
    company: "",
    description: "",
    dateStarted: "",
    dateEnded: "",
    id: "",
  });

  const handleAddEntry = () => {
    const fullData = { ...data, id: crypto.randomUUID() };
    onSubmit(fullData);
  };

  const handleDataChange = (property, value) => {
    setData({ ...data, [property]: value });
  };

  return (
    <div className="add_experience_form block">
      <CustomInput
        type="text"
        label="Company"
        value={data.company}
        onChange={(e) => handleDataChange("company", e.target.value)}
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
        onChange={(e) => handleDataChange("dateEnded", e.target.value)}
      />
      <label htmlFor="add_experience_form_description">Description</label>
      <textarea
        id="add_experience_form_description"
        value={data.description}
        onChange={(e) => handleDataChange("description", e.target.value)}
      ></textarea>
      <button onClick={handleAddEntry}>Add</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
