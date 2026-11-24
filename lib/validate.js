import { CATEGORIES } from "./categories";

export function validateExpense({ title, amount, category, date }) {
  if (!title || title.trim() === "") return "Please add a title.";
  if (typeof amount !== "number" || !(amount > 0))
    return "Amount must be a number above 0";
  if (!CATEGORIES.includes(category)) return "Please pick a category";
  if (!date) return "Please add a date";
}
