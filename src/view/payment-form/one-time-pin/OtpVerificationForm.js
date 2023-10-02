import React, { useState } from "react";

function OtpVerificationForm({ onConfirm }) {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleConfirmPayment = () => {
    if (otp === "") {
      setError("OTP is required.");
    } else if (otp !== "123456") {
      // Replace "123456" with your actual OTP validation logic
      setError("Incorrect OTP. Please try again.");
    } else {
      setError(""); // Clear any previous error
      onConfirm(); // Proceed with payment confirmation
    }
  };

  return (
    <div>
        <h2>Verification</h2>
        <p>To proceed, a 6-digit code will be sent via SMS</p>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={handleOtpChange}
      />
      <p className="error">{error}</p>
      <button onClick={handleConfirmPayment}>VERIFY</button>
    </div>
  );
}

export default OtpVerificationForm;
