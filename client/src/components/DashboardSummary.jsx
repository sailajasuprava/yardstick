import { format } from "date-fns";
import { useTransaction } from "../context/TransactionContext";

export default function DashboardSummary() {
  const { transactions } = useTransaction();

  if (!transactions || transactions.length === 0) return null;

  const totalExpenses = transactions.reduce((sum, tx) => sum + tx.amount, 0);

  const categoryBreakdown = {};

  transactions.forEach((tx) => {
    if (!categoryBreakdown[tx.category]) {
      categoryBreakdown[tx.category] = 0;
    }
    categoryBreakdown[tx.category] += tx.amount;
  });

  const recentTransactions = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-4 bg-cyan-100 rounded-2xl shadow">
        <h3 className="text-lg font-semibold text-cyan-800">Total Expenses</h3>
        <p className="text-2xl font-bold text-cyan-900 mt-2">
          ₹{totalExpenses}
        </p>
      </div>

      <div className="p-4 bg-emerald-100 rounded-2xl shadow">
        <h3 className="text-lg font-semibold text-emerald-800">
          Category Breakdown
        </h3>
        <ul className="mt-2 space-y-1">
          {Object.entries(categoryBreakdown).map(([category, amount]) => (
            <li
              key={category}
              className="flex justify-between text-emerald-900"
            >
              <span className="capitalize">{category}</span>
              <span>₹{amount}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 bg-yellow-100 rounded-2xl shadow">
        <h3 className="text-lg font-semibold text-yellow-800">
          Recent Transactions
        </h3>
        <ul className="mt-2 space-y-1 text-yellow-900 text-sm">
          {recentTransactions.map((tx) => (
            <li key={tx._id} className="flex justify-between">
              <span className="truncate">{tx.description}</span>
              <span>{format(new Date(tx.date), "dd MMM")}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
