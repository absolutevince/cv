import { useState } from "react";
import CustomInput from "./CustomInput";

export default function AddExperiencForm({ onSubmit, onClose }) {
  const [data, setData] = useState({
    title: "",
    description: "",
    dateFrom: "",
    dateTo: "",
    id: crypto.randomUUID(),
  });

  const handleAddEntry = () => {
    const fullData = { ...data, id: crypto.randomUUID() };
    onSubmit(fullData);
  };
  return (
    <div className="add_experience_form block">
      <CustomInput
        type="text"
        label="Company"
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
      <label forHtml="add_experience_form_description">Description</label>
      <textarea
        id="add_experience_form_description"
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
      ></textarea>

      <button onClick={handleAddEntry}>Add</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
