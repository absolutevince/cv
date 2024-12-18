import { useState } from "react";
import CustomButton from "./CustomButton";
import AddEducationForm from "./AddEducationForm";
import EducationItem from "./EducationItem";

export default function Education({ onSubmit }) {
  const [data, setData] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormSubmit = (newData) => {
    setData([...data, newData]);
  };

  const handleDelete = (id) => {
    const newData = data.filter((d) => d.id !== id);
    setData(newData);
  };

  const handleClose = () => {
    setIsFormOpen(false);
  };

  return (
    <section className="education block">
      <h2>Education</h2>
      <ul className="item_list">
        {data.length > 0 &&
          data.map((ed) => (
            <li key={ed.id}>
              <EducationItem
                school={ed.school}
                dateStarted={ed.dateStarted}
                dateEnded={ed.dateEnded}
                description={ed.description}
                onDelete={() => handleDelete(ed.id)}
              />
            </li>
          ))}
      </ul>
      <CustomButton
        className="education_add_button"
        text="Add Education"
        onClick={() => setIsFormOpen(true)}
      />
      {isFormOpen && (
        <AddEducationForm onAdd={handleFormSubmit} onClose={handleClose} />
      )}
      <CustomButton
        className="education_submit_button submit_button"
        text="Save"
        onClick={() => onSubmit("education", data)}
      />
    </section>
  );
}
