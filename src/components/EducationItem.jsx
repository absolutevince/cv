import CustomButton from "./CustomButton";

export default function EducationItem({
  school,
  degree,
  dateStarted,
  dateEnded,
  description,
  id,
  onDelete,
}) {
  return (
    <div className="item">
      <div>
        <h3>{school}</h3>
        <p>{degree}</p>
        <div className="date">
          <span>
            {dateStarted} - {dateEnded}
          </span>
        </div>
        <p>{description}</p>
      </div>
      <CustomButton
        className="remove_button"
        text="Remove"
        onClick={onDelete}
      />
    </div>
  );
}
