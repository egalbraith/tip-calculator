export default function SelectPercentage({
  children,
  percentage,
  onPercentageSelect,
}) {
  return (
    <div>
      {children}
      <select
        type="select"
        value={percentage}
        onChange={(e) => onPercentageSelect(Number(e.target.value))}
      >
        <option value="00">Dissatisfied (0%)</option>
        <option value="05">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
