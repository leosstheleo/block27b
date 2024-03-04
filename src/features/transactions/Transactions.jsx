import { useState } from "react";
import { useSelector } from "react-redux"; // Importing useSelector from react-redux

import "./transactions.scss";

export default function Transactions() {
  const balance = useSelector(state => state.balance || 0); // Use 0 as default if balance is undefined

  const [amountStr, setAmountStr] = useState("0.00");

  const onTransaction = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.name;
    const amount = +amountStr;
    // Dispatch the appropriate transaction action based on `action`
    // dispatch({ type: action, amount }); // Remember to dispatch the action
  };

  return (
    <section className="transactions container">
      <h2>Transactions</h2>
      <figure>
        <figcaption>Current Balance &nbsp;</figcaption>
        <strong>${balance.toFixed(2)}</strong> {/* Ensure balance is defined before calling toFixed */}
      </figure>
      <form onSubmit={onTransaction}>
        <div className="form-row">
          <label>
            Amount
            <input
              type="number"
              inputMode="decimal"
              min={0}
              step="0.01"
              value={amountStr}
              onChange={(e) => setAmountStr(e.target.value)}
            />
          </label>
          <div>
            <button type="submit" name="deposit">
              Deposit
            </button>
            <button type="submit" name="withdraw">
              Withdraw
            </button>
          </div>
        </div>
        <div className="form-row">
          <label>
            Transfer to
            <input type="text" placeholder="Recipient Name" name="recipient" />
          </label>
          <button type="submit" name="transfer">
            Transfer
          </button>
        </div>
      </form>
    </section>
  );
}
