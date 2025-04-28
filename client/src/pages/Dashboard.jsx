import CategoryPieChart from "../components/CategoryPieChart";
import DashboardSummary from "../components/DashboardSummary";
import MonthlyExpensesChart from "../components/MonthlyExpensesChart";

function Dashboard() {
  return (
    <div className="p-10 space-y-6">
      <DashboardSummary />
      <div className="grid grid-cols-2 gap-6">
        <MonthlyExpensesChart />
        <CategoryPieChart />
      </div>
    </div>
  );
}

export default Dashboard;
