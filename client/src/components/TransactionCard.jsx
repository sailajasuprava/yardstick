import { useTransaction } from "../context/TransactionContext";
import { format } from "date-fns";

export default function TransactionCard({ transaction }) {
  const { handleDelete } = useTransaction();
  const { amount, category, description, date, _id } = transaction;
  return (
    <div className="grid grid-cols-5 items-center py-2 text-center border-b border-stone-300">
      <p>{description}</p>
      <p>{category}</p>
      <p>{format(new Date(date), "dd-MM-yyyy")}</p>
      <p className="text-emerald-500 font-bold">{amount}</p>
      <div>
        <button className="red" onClick={() => handleDelete(_id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
