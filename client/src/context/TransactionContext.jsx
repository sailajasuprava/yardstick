import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "../lib/axios";

const TransactionContext = createContext();

function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchAllTransactions();
  }, []);

  async function fetchAllTransactions() {
    try {
      setIsLoading(true);
      const res = await axios.get("/transactions");
      setTransactions(res.data.data);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete(id) {
    try {
      setIsLoading(true);
      const res = await axios.delete(`/transactions/${id}`);
      toast.success(res.data.message);
      setTransactions((prev) => prev.filter((ele) => ele._id !== id));
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        setTransactions,
        isLoading,
        setIsLoading,
        handleDelete,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTransaction() {
  const context = useContext(TransactionContext);
  if (!context) throw new Error("TransactionContext used outside of provider.");
  return context;
}

export default TransactionProvider;
