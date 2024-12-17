export default function EducationItem({
  school,
  degree,
  dateStarted,
  dateEnded,
  description,
}) {
  return (
    <>
      <h3>{school}</h3>
      <p>{degree}</p>
      <div className="date">
        <span>
          {dateStarted} - {dateEnded}
        </span>
      </div>
      <p>{description}</p>
    </>
  );
}
