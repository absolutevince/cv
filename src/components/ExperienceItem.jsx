import CustomButton from "../components/CustomButton";

export default function ExperienceItem({
  title,
  description,
  dateFrom,
  dateTo,
  id,
  onRemove,
}) {
  return (
    <article id={id} className="experience_item">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="experience_item-date">
        <span className="from">{dateFrom}</span>
        <span className="to">{dateTo}</span>
      </div>
      <CustomButton
        text="Remove"
        className="experience_item_remove_button remove_button"
        onClick={() => onRemove(id)}
      />
    </article>
  );
}
