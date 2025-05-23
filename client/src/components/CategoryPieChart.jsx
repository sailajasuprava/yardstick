import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useTransaction } from "../context/TransactionContext";

const COLORS = [
  "#52bad5",
  "#87edcf",
  "#d1dc4f",
  "#f6c343",
  "#b25acb",
  "#7f59d1",
  "#3d51b2",
];

export default function CategoryPieChart() {
  const { transactions } = useTransaction();
  if (!transactions || transactions.length === 0) {
    return (
      <div className="w-full h-80 flex items-center justify-center bg-white rounded-2xl shadow-md">
        <p className="text-gray-400">No transactions to display</p>
      </div>
    );
  }

  const categoryTotals = {};

  transactions.forEach((tx) => {
    if (!categoryTotals[tx.category]) {
      categoryTotals[tx.category] = 0;
    }
    categoryTotals[tx.category] += tx.amount;
  });

  const pieData = Object.keys(categoryTotals).map((category) => ({
    name: category,
    value: categoryTotals[category],
  }));

  return (
    <div className="w-full h-80 p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Category-wise Expenses
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
