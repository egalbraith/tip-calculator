export default function Output({ total, tip }) {
  return (
    <h3>
      You pay ${total + tip} (${total} + ${tip} tip)
    </h3>
  );
}
