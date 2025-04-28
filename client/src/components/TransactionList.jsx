import Spinner from "./Spinner";
import TransactionCard from "./TransactionCard";
import { useTransaction } from "../context/TransactionContext";

function TransactionList() {
  const { transactions, isLoading } = useTransaction();

  if (isLoading) return <Spinner />;

  return (
    <div className="max-w-6xl mx-auto">
      <header className="grid grid-cols-5 text-center items-center uppercase font-bold mt-8">
        <div>Description</div>
        <div>Category</div>
        <div>Date</div>
        <div>Price (₹)</div>
        <div></div>
      </header>
      {transactions.map((transaction) => (
        <TransactionCard key={transaction._id} transaction={transaction} />
      ))}
    </div>
  );
}

export default TransactionList;
