// Import the App.css file for styling
import "./App.css";

// Import various components used in the App
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TranscationList from "./components/TranscationList";
import AddTranscation from "./components/AddTranscation";

// Import the GlobalProvider component from the GlobalState context
import { GlobalProvider } from "./context/GlobalState";

// Define the App function component
function App() {
  // Return the JSX elements that make up the App
  return (
    // Wrap the App in the GlobalProvider component to share state
    <GlobalProvider>
      <div>
        {/* Render the Header component */}
        <Header />

        {/* Container div to hold the main content */}
        <div className="container">
          {/* Render the Balance component */}
          <Balance />

          {/* Render the IncomeExpenses component */}
          <IncomeExpenses />

          {/* Render the TranscationList component */}
          <TranscationList />

          {/* Render the AddTranscation component */}
          <AddTranscation />
        </div>
      </div>
    </GlobalProvider>
  );
}

// Export the App component as the default export
export default App;
