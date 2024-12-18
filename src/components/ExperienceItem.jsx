import CustomButton from "../components/CustomButton";

export default function ExperienceItem({
  company,
  description,
  dateStarted,
  dateEnded,
  id,
  onRemove,
}) {
  return (
    <article id={id} className="item">
      <div>
        <h3>{company}</h3>
        <p>{description}</p>
        <span className="date">
          {dateStarted} - {dateEnded}
        </span>
      </div>
      <CustomButton
        text="Remove"
        className="experience_item_remove_button remove_button"
        onClick={onRemove}
      />
    </article>
  );
}
