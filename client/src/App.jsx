import { Toaster } from "react-hot-toast";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import MonthlyExpensesChart from "./components/MonthlyExpensesChart";
import DashboardSummary from "./components/DashboardSummary";
import CategoryPieChart from "./components/CategoryPieChart";

function App() {
  return (
    <div>
      <TransactionForm />
      <TransactionList />
      <MonthlyExpensesChart />
      <DashboardSummary />
      <CategoryPieChart />
      <Toaster />
    </div>
  );
}

export default App;
