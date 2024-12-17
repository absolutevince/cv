export default function CustomInput({
  type,
  value,
  label,
  property,
  onChange,
  placeHolder,
}) {
  return (
    <div className="input">
      <label htmlFor={label + "_input"}>{label}</label>
      <input
        placeholder={placeHolder}
        id={label + "_input"}
        type={type}
        value={value}
        onChange={(e) => onChange(e, property)}
      />
    </div>
  );
}
