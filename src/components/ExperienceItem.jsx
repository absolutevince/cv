export default function ExperienceItem({
  title,
  description,
  dateFrom,
  dateTo,
}) {
  return (
    <article className="experience_item">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="experience_item-date">
        <span className="from">{dateFrom}</span>
        <span className="to">{dateTo}</span>
      </div>
    </article>
  );
}
