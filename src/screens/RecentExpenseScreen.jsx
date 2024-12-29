import { View, StyleSheet, Text } from "react-native";
import ExpensesOutput from "../components/ExpenseOuput/ExpensesOutput";
const RecentExpenseScreen = () => {
  return <ExpensesOutput expensesPeriod={"Last 7 days"} />;
};
const styles = StyleSheet.create({});
export default RecentExpenseScreen;
