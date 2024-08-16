import React, { useState, useContext } from "react";
import { GlobalState } from "../context/GlobalState";
// import AddTranscation from "./AddTranscation";
function AddTranscation() {
  const { setState } = useContext(GlobalState);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const changeText = (event) => {
    setText(event.target.value);
  };

  const changeAmount = (event) => {
    setAmount(event.target.value);
  };

  const changeType = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Transaction added:");
    console.log("Text:", text);
    console.log("Amount:", amount);
    console.log("Type:", type);

    if (text == "" || amount == "") {
      alert("Please add a value for text and amount first.");
      return;
    }
    const newTransaction = {
      id: Date.now(),
      text,
      amount: type === "expense" ? -parseFloat(amount) : parseFloat(amount),
    };
    setState((prevState) => {
      return {
        ...prevState,
        transactions: [...prevState.transactions, newTransaction],
      };
    });
    setText("");
    setAmount("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={changeText}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <div className="amount-choice">
            <input
              type="number"
              value={amount}
              onChange={changeAmount}
              placeholder="Enter amount..."
              style={{ marginRight: "10px" }}
            />
            <select name="type" id="choice" value={type} onChange={changeType}>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
        </div>
        <button onClick={handleSubmit} className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </>
  );
}

export default AddTranscation;
