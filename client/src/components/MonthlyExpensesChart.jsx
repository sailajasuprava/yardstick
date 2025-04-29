import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { format } from "date-fns";
import { useTransaction } from "../context/TransactionContext";
import Spinner from "./Spinner";

export default function MonthlyExpensesChart() {
  const { transactions, isLoading } = useTransaction();

  const monthlyData = {};

  if (isLoading) return <Spinner />;

  transactions.forEach((tx) => {
    const month = format(new Date(tx.date), "MMM yyyy");
    if (!monthlyData[month]) {
      monthlyData[month] = 0;
    }
    monthlyData[month] += tx.amount;
  });

  const chartData = Object.keys(monthlyData).map((month) => ({
    month,
    total: monthlyData[month],
  }));

  return (
    <div className="h-80 p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Monthly Expenses
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#0EA5E9" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
