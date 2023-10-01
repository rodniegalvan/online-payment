/*import React, { useState } from "react";

function VerifyNumberForm({ onNext }) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleNext = () => {
    if (phoneNumber) {
      onNext();
    } else {
      alert("Please enter a phone number.");
    }
  };

  return (
    <div>
      <h2>Step 2: Verify Phone Number</h2>
      <input
        type="text"
        placeholder="Enter Phone Number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default VerifyNumberForm; */
