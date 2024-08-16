import React, { createContext, useState } from "react";

// Define the initial state of the application, which includes an empty transactions array
const initialState = {
  transactions: [], // Initialize transactions as an empty array
};

// Create a context to share state between components
const GlobalState = createContext();

// Define a component that wraps the application and provides context to its children
const GlobalProvider = ({ children }) => {
  // Initialize state with the initial state and a function to update it
  const [state, setState] = useState(initialState);

  // The state variable holds the current state of the application
  // The setState function is used to update the state

  // Return the context provider with the current state and update function
  return (
    // Provide the context to all children components
    <GlobalState.Provider value={{ state, setState }}>
      {children}
    </GlobalState.Provider>
  );
};

// The GlobalProvider component is typically used to wrap the entire application
// This allows all components to access the shared state and update function

// Export the context and provider for use in other components
export { GlobalState, GlobalProvider };
