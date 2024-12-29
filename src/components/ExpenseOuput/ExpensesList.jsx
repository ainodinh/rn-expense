import { View, StyleSheet, Text, FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = (itemData) => {
  return <ExpenseItem expense={itemData.item} />;
};

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(itemm) => itemm.id}
      renderItem={renderExpenseItem}
    />
  );
};
const styles = StyleSheet.create({});
export default ExpensesList;
