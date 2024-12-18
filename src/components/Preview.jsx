export default function Preview({ data }) {
  const { general, education, experience } = data;

  return (
    <section className="preview">
      {Object.keys(general).length > 0 && (
        <header className="preview_generel">
          <p className="preview_name">
            {general.firstName + " " + general.lastName}
          </p>
          <div className="preview_general-set">
            <span className="preview_label">Age: </span>
            <span>{general.age !== "" && general.age + " years-old"}</span>
          </div>
          <div className="preview_general-set">
            <span className="preview_label">Phone Number: </span>
            <a href={"tel:" + general.phoneNumber}>{general.phoneNumber}</a>
          </div>
          <div className="preview_general-set">
            <span className="preview_label">Email: </span>
            <a href={"mail:" + general.email}>{general.email}</a>
          </div>
          <hr />
        </header>
      )}
      {education.length > 0 && (
        <section className="preview_education">
          <h2>Education</h2>
          <ul className="preview_list">
            {education.map((ed) => (
              <li key={ed.id}>
                <h3>{ed.school}</h3>
                <p>{ed.degree}</p>
                <span>
                  {ed.dateStarted} - {ed.dateEnded}
                </span>
              </li>
            ))}
          </ul>
          <hr />
        </section>
      )}
      {experience.length > 0 && (
        <section className="preview_experience">
          <h2>Experience</h2>
          <ul className="preview_list">
            {experience.map((exp) => (
              <li key={exp.id}>
                <h3>{exp.company}</h3>
                <p>
                  {exp.dateStarted} - {exp.dateEnded}
                </p>
              </li>
            ))}
          </ul>
          <hr />
        </section>
      )}
    </section>
  );
}
