import React, { useState } from "react";

function AccountForm({ onNext }) {
  const [amount, setAmount] = useState("");
  const [selectedAccount, setSelectedAccount] = useState(""); // New state for selected account

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
  };

  const handleNext = () => {
    if (amount && selectedAccount) {
      onNext();
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div>
      <h2>Step 1: Enter Amount and Select Debit Account</h2>
      <input
        type="text"
        placeholder="Enter Amount"
        value={amount}
        onChange={handleAmountChange}
      />

      <div>
        <h3>Select Debit Account:</h3>
        <label>
          <input
            type="radio"
            name="debitAccount"
            value="account1"
            checked={selectedAccount === "account1"}
            onChange={handleAccountChange}
          />
          Account 1
        </label>
        <label>
          <input
            type="radio"
            name="debitAccount"
            value="account2"
            checked={selectedAccount === "account2"}
            onChange={handleAccountChange}
          />
          Account 2
        </label>
        {/* Add more account options as needed */}
      </div>

      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default AccountForm;
