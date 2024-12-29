import { View, StyleSheet, Text } from "react-native";
import ExpensesOutput from "../components/ExpenseOuput/ExpensesOutput";
const AllExpensesScreen = () => {
  return (
    <ExpensesOutput expensesPeriod={"Total"} />
  );
};
const styles = StyleSheet.create({});
export default AllExpensesScreen;
