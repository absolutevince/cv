import AddSkillForm from "./AddSkillForm";
import CustomButton from "./CustomButton";
import { useState } from "react";
import SkillItem from "./SkillItem";

export default function Skills({ onSubmit }) {
  const [data, setData] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleRemoveSkill = (id) => {
    const d = data.filter((skl) => skl.id !== id);
    setData(d);
  };
  const handleAddSkill = (d) => {
    setData([...data, d]);
  };

  return (
    <section className="skills block">
      <h2>Skills</h2>
      <ul>
        {data.length > 0 &&
          data.map((skl) => (
            <li key={skl.id} className="skill">
              <SkillItem
                name={skl.name}
                onRemove={() => handleRemoveSkill(skl.id)}
              />
            </li>
          ))}
      </ul>
      <CustomButton
        text="Add Skill"
        className="skills_add_button"
        onClick={() => setIsFormOpen(true)}
      />
      {isFormOpen && <AddSkillForm onAdd={handleAddSkill} />}
      <CustomButton
        text="Save"
        className="skills_save_button"
        onClick={() => onSubmit("skills", data)}
      />
    </section>
  );
}
