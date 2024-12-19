import CustomButton from "./CustomButton";

export default function SkillItem({ name, onRemove }) {
  return (
    <div>
      <p>{name}</p>
      <CustomButton text="Remove" onClick={onRemove} />
    </div>
  );
}
