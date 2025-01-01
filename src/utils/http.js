import axios from "axios";

const BACKEND_URL =
  "https://expenses-d6f97-default-rtdb.asia-southeast1.firebasedatabase.app";

export async function storeExpense(expenseData) {
  const res = await axios.post(
    BACKEND_URL + "/expeses.json",

    expenseData
  );
  return res.data.name;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expeses.json");
  const epxenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    epxenses.push(expenseObj);
  }
  return epxenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}
