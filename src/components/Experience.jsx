import { useState } from "react";
import ExperienceItem from "./ExperienceItem";
import AddExperiencForm from "./AddExperienceForm";
import CustomButton from "./CustomButton";

export default function Experience({ onSubmit }) {
  const [data, setData] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormSubmit = (newData) => {
    setData([...data, newData]);
  };

  const handleRemove = (id) => {
    const newData = data.filter((d) => d.id !== id);
    setData(newData);
  };

  return (
    <section className="experience block">
      <h2>Experience</h2>
      <ul className="item_list">
        {data.length > 0 &&
          data.map((exp) => (
            <li key={exp.id}>
              <ExperienceItem
                company={exp.company}
                description={exp.description}
                dateStarted={exp.dateStarted}
                dateEnded={exp.dateEnded}
                onRemove={() => handleRemove(exp.id)}
              />
            </li>
          ))}
      </ul>
      <CustomButton
        className="experience_add_button"
        text="Add Experience"
        onClick={() => setIsFormOpen(true)}
      />
      {isFormOpen && (
        <AddExperiencForm
          onSubmit={handleFormSubmit}
          onClose={() => setIsFormOpen(false)}
        />
      )}
      <CustomButton
        className="experience_submit_button"
        text="Save"
        onClick={() => onSubmit("experience", data)}
      />
    </section>
  );
}
