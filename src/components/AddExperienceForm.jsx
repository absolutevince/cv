import { useState } from "react";
import CustomInput from "./CustomInput";

export default function AddExperiencForm({ onSubmit, onClose }) {
  const [data, setData] = useState({
    title: "",
    description: "",
    dateFrom: "",
    dateTo: "",
  });

  const handleSubmit = () => {
    const fullData = { ...data, id: crypto.randomUUID() };
    onSubmit(fullData);
  };
  return (
    <div className="add_experience_form">
      <CustomInput
        type="text"
        label="Company"
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
      <textarea
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
      ></textarea>

      <button onClick={handleSubmit}>Add</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
