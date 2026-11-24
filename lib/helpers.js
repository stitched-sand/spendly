export function formatMoney(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function sum(expenses) {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}

export function formatMonth(month) {
  const [year, monthNumber] = month.split("-");
  return new Date(year, monthNumber - 1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export function getMonths(expenses) {
    return [...new Set(expenses.map((expense) => expense.date.slice(0, 7)))]
}

