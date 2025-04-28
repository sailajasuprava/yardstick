import { useTransaction } from "../context/TransactionContext";

export default function TransactionCard({ transaction }) {
  const { handleDelete } = useTransaction();
  const { amount, category, description, date, _id } = transaction;
  return (
    <div className="border border-amber-300">
      <p>{amount}</p>
      <p>{category}</p>
      <p>{description}</p>
      <p>{date}</p>
      <button onClick={() => handleDelete(_id)}>Delete</button>
    </div>
  );
}
