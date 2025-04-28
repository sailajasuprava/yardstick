import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "../lib/axios";
import { useTransaction } from "../context/TransactionContext";

const initialState = {
  amount: "",
  date: "",
  description: "",
  category: "",
};

const categories = [
  "food",
  "bills",
  "entertainment",
  "shopping",
  "travel",
  "other",
];

export default function TransactionForm() {
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const { setTransactions } = useTransaction();

  function handleChange(e) {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.post("/transactions", formData);
      toast.success(res.data.message);
      setTransactions((prev) => [...prev, res.data.data]);
      setFormData(initialState);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-20">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-3xl bg-white shadow-2xl p-10 mx-auto"
      >
        <h1 className="text-center text-sky-500 font-semibold text-3xl">
          Add your transactions
        </h1>

        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 w-full"
        />

        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="border p-2 w-full"
        />

        <select
          name="category"
          required
          value={formData.category}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="bg-sky-500 text-white px-4 py-2 rounded"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}
