import React, { useState } from "react";
import AccountForm from "./account-form/AccountForm";
import OtpVerificationForm from "./one-time-pin/OtpVerificationForm";
import ConfirmationMessage from "./confirmation/ConfirmationMessage";
import AddBank from "./add-bank/AddBank";

import "./PaymentForm.css";

function PaymentForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [isCustomAccount, setIsCustomAccount] = useState(false);

  const handleAmountNext = (account) => {
    if (account === "custom") {
      setIsCustomAccount(true);
      setCurrentStep(0);
    } else {
      setCurrentStep(1);
      setIsCustomAccount(false);
    }
  };

  const handleConfirmPayment = () => {
    setConfirmed(true);
    setCurrentStep(2);
    setTimeout(() => {
      alert("Payment confirmed!");
    }, 1000);
  };

  return (
    <div className="payment-form-container">
      <div className="payment-form">
        {/* Step 0: Account Form */}
        {currentStep === 0 && !isCustomAccount && <AccountForm onNext={handleAmountNext} />}

        {/* Step 0: Add Bank Form (Custom Account) */}
        {currentStep === 0 && isCustomAccount && <AddBank onNext={handleAmountNext} />}

        {/* Step 1: OTP Verification */}
        {currentStep === 1 && <OtpVerificationForm onConfirm={handleConfirmPayment} />}

        {/* Step 2: Confirmation Message */}
        {currentStep === 2 && confirmed && <ConfirmationMessage />}
      </div>
    </div>
  );
}

export default PaymentForm;
