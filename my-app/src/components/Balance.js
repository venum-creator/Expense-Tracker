import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalState";

/**
 * Balance component.
 * This component calculates and displays the total balance based on the transactions in the state.
 */
function Balance() {
  // Get the state from the GlobalState context
  const { state } = useContext(GlobalState);

  // Extract the amounts from the transactions in the state
  const amounts =
    state.transactions.map((transaction) => transaction.amount) || [];

  // Calculate the total balance by summing up all the amounts
  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);

  // Render the total balance
  return (
    <>
      {/* Display the title */}
      <h4>Your Balance</h4>
      {/* Display the total balance with the Indian Rupee symbol */}
      <h1>&#8377;{total}</h1>
    </>
  );
}

export default Balance;
