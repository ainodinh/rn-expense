import { View, StyleSheet, Text, FlatList } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "a pair of shoes",
    amount: 59.99,
    date: new Date("2024-12-12"),
  },
  {
    id: "e2",
    description: "a pair of shoes",
    amount: 59.99,
    date: new Date("2024-12-12"),
  },
  {
    id: "e3",
    description: "a pair of shoes",
    amount: 59.99,
    date: new Date("2024-12-12"),
  },
  {
    id: "e4",
    description: "a pair of shoes",
    amount: 59.99,
    date: new Date("2024-12-12"),
  },
  {
    id: "e5",
    description: "a pair of shoes",
    amount: 59.99,
    date: new Date("2024-12-12"),
  },
  {
    id: "e2",
    description: "a pair of shoes",
    amount: 59.99,
    date: new Date("2024-12-12"),
  },
  {
    id: "e3",
    description: "a pair of shoes",
    amount: 59.99,
    date: new Date("2024-12-12"),
  },
  {
    id: "e4",
    description: "a pair of shoes",
    amount: 59.99,
    date: new Date("2024-12-12"),
  },
  {
    id: "e5",
    description: "a pair of shoes",
    amount: 59.99,
    date: new Date("2024-12-12"),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
export default ExpensesOutput;
