import React, { useState } from "react";
import { Input } from "antd";
import "./EnterAmount.css";

function EnterAmount() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    let newValue = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    newValue = newValue.replace(/^0+(?=\d)/, ''); // Remove leading zeros before the decimal point
    setInputValue(newValue);
  };

  const formatInput = () => {
    const length = inputValue.length;
    if (length === 0) {
      return '';
    }

    if (length === 1) {
      return `0.0${inputValue}`;
    }

    if (length === 2) {
      return `0.${inputValue}`;
    }

    // Shift the digits from right to left
    const integerPart = inputValue.substring(0, length - 2);
    const decimalPart = inputValue.substring(length - 2, length);
    return `${integerPart}.${decimalPart}`;
  };

  return (
    <Input
      className="enter-amount"
      controls={false}
      value={formatInput()}
      onChange={handleInputChange}
      placeholder="0.00"
      prefix="PHP"
    />
  );
}

export default EnterAmount;
