import Spinner from "./Spinner";
import TransactionCard from "./TransactionCard";
import { useTransaction } from "../context/TransactionContext";

function TransactionList() {
  const { transactions, isLoading } = useTransaction();

  if (isLoading) return <Spinner />;

  return (
    <div className="max-w-3xl mx-auto">
      {transactions.map((transaction) => (
        <TransactionCard key={transaction._id} transaction={transaction} />
      ))}
    </div>
  );
}

export default TransactionList;
