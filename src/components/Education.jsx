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

  return (
    <section className="education block">
      <h2>Education</h2>
      <ul>
        {data.length > 0 &&
          data.map((ed) => (
            <li>
              <EducationItem
                school={ed.school}
                dateStarted={ed.dateStarted}
                dateEnded={ed.dateEnded}
                description={ed.description}
              />
            </li>
          ))}
      </ul>
      <CustomButton
        className="education_add_button"
        text="Add Education"
        onClick={() => setIsFormOpen(true)}
      />
      {isFormOpen && <AddEducationForm onSubmit={handleFormSubmit} />}
      <CustomButton
        className="education_submit_button submit_button"
        text="Submit"
        onClick={() => onSubmit(data)}
      />
    </section>
  );
}
