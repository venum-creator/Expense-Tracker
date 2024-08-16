import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalState";

function TranscationList() {
  // Access the state from the GlobalState context
  const { state, setState } = useContext(GlobalState);

  const remove = (transaction) => {
    setState((prevState) => {
      return {
        ...prevState,
        transactions: prevState.transactions.filter(
          (t) => t.id !== transaction.id
        ),
      };
    });
    console.log("Deleted");
  };
  return (
    <>
      {/* Display the title */}
      <h3>History</h3>
      {/* Render a list of transactions */}
      <ul className="list">
        {/* Map over the transactions and render each one */}
        {state.transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={transaction.amount < 0 ? "minus" : "plus"}
          >
            {/* Display the transaction text */}
            {transaction.text}
            {/* Display the transaction amount with a plus or minus sign */}
            <span>
              {transaction.amount > 0
                ? `+₹${transaction.amount}`
                : `-₹${Math.abs(transaction.amount)}`}
            </span>
            {/* Display a delete button */}
            <button onClick={() => remove(transaction)} className="delete-btn">
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TranscationList;
