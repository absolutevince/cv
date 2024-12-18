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

  return (
    <section className="experience block">
      <h2>Experience</h2>
      <ul>
        {data.length > 0 &&
          data.map((exp) => (
            <li key={exp.id}>
              <ExperienceItem
                title={exp.title}
                description={exp.description}
                dateFrom={exp.dateFrom}
                dateTo={exp.dateTo}
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
        text="Submit"
        onClick={() => onSubmit("experience", data)}
      />
    </section>
  );
}
