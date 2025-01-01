import { View, StyleSheet, Text } from "react-native";
import ExpensesOutput from "../components/ExpenseOuput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "../store/expenses-context";
import { getDateMinusDay } from "../utils/date";
import { fetchExpenses } from "../utils/http";
import LoadingOverlay from "../components/ui/LoadingOverlay";
const RecentExpenseScreen = () => {
  const [isFetching, setIsFetching] = useState(false);
  const expenseCtx = useContext(ExpenseContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      const expenses = await fetchExpenses();
      setIsFetching(false);
      expenseCtx.setExpenses(expenses);
    }
    getExpenses();
  }, []);

  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDay(today, 7);

    return (expense.date > date7DaysAgo) & (expense.date < today);
  });

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <ExpensesOutput expensesPeriod={"Last 7 days"} expenses={recentExpenses} />
  );
};
const styles = StyleSheet.create({});
export default RecentExpenseScreen;
