import { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

export default function AddSkillForm({ onAdd }) {
  const [data, setData] = useState("");

  const handleDataChange = (name) => {
    setData(name);
  };

  const handleAddSkill = () => {
    const d = { name: data, id: crypto.randomUUID() };
    onAdd(d);
  };

  return (
    <div>
      <CustomInput
        type="text"
        label="Skill"
        value={data}
        onChange={(e) => handleDataChange(e.target.value)}
      />
      <CustomButton text="Add" onClick={handleAddSkill} />
    </div>
  );
}
