import React, { useState } from "react";
import AccountForm from "../account-form/AccountForm";
import VerifyNumberForm from "../verify-number/VerifyNumberForm";
import OtpVerificationForm from "../one-time-pin/OtpVerificationForm";
import ConfirmationMessage from "../confirmation/ConfirmationMessage";

function PaymentForm() {
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const handleAmountNext = () => {
    setStep(2);
  };

  const handlePhoneNumberNext = () => {
    setStep(3);
    // Simulate sending OTP (replace with actual logic)
    setTimeout(() => {
      alert("OTP sent to your phone number.");
    }, 1000);
  };

  const handleConfirmPayment = () => {
    setConfirmed(true);
    // Process the payment (replace with actual logic)
    setTimeout(() => {
      alert("Payment confirmed!");
    }, 1000);
  };

  return (
    <div>
      {step === 1 && <AccountForm onNext={handleAmountNext} />}
      {step === 2 && (
        <VerifyNumberForm onNext={handlePhoneNumberNext} />
      )}
      {step === 3 && <OtpVerificationForm onConfirm={handleConfirmPayment} />}
      {confirmed && <ConfirmationMessage />}
    </div>
  );
}

export default PaymentForm;
