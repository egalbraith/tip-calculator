export default function BillInput({ total, onTotalSet }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        value={total}
        type="text"
        onChange={(e) => onTotalSet(Number(e.target.value))}
        placeholder="Bill value"
      ></input>
    </div>
  );
}
