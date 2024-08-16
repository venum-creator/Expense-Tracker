import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalState";

function IncomeExpenses() {
  // Access the state from the GlobalState context
  const { state } = useContext(GlobalState);

  // Extract the amounts from the transactions
  const amounts = state.transactions.map((transcation) => transcation.amount);

  // Calculate the total income by filtering for positive amounts and summing them up
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => acc + amount, 0)
    .toFixed(2);

  // Calculate the total expense by filtering for negative amounts and summing them up
  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, amount) => acc + amount, 0)
    .toFixed(2);

  return (
    // Container for the income and expense displays
    <div className="exp-container">
      {/* Display the income */}
      <div>
        <h4>Income</h4>
        <p className="money plus">&#8377;{income}</p>
      </div>
      {/* Display the expense */}
      <div>
        <h4>Expense</h4>
        <p className="money minus">&#8377;{Math.abs(expense)}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
