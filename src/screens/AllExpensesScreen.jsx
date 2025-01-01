import { View, StyleSheet, Text } from "react-native";
import ExpensesOutput from "../components/ExpenseOuput/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/expenses-context";
const AllExpensesScreen = () => {
  const expenseCtx = useContext(ExpenseContext);
  return (
    <ExpensesOutput expensesPeriod={"Total"} expenses={expenseCtx.expenses} />
  );
};
const styles = StyleSheet.create({});
export default AllExpensesScreen;
