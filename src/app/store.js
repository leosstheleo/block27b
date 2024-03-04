import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "../features/transactions/transactionsSlice";

// Configure the store to use the reducer from the transactions slice
export const store = configureStore({
  reducer: {
    transactions: transactionsReducer // Assign the transactions reducer to the 'transactions' slice of the store
  }
});

export default store;