import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store'; // Import your Redux store
import TransactionHistory from "../features/transactions/TransactionHistory";
import Transactions from "../features/transactions/Transactions";

import "./app.css";

function App() {
  return (
    // Wrap your App component with Provider and pass the store as a prop
    <Provider store={store}>
      <main>
        <h1>Bank Account</h1>
        <Transactions />
        <TransactionHistory />
      </main>
    </Provider>
  );
}

export default App;

