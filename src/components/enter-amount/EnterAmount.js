import React, { useState } from "react";
import { Input } from "antd";
import "./EnterAmount.css";

function EnterAmount() {
  const [inputValue, setInputValue] = useState("");
  const [inputWidth, setInputWidth] = useState(85);

  const handleInputChange = (e) => {
    let newValue = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    newValue = newValue.replace(/^0+(?=\d)/, ""); // Remove leading zeros before the decimal point

    setInputValue(newValue);

    let length = newValue.length;
    if (length === 0 || length === 1 || length === 2 || length === 3) {
      setInputWidth(85);
    } else {
      if (inputWidth <= 1500) {
        setInputWidth(40 + newValue.length * 20);
      }
    }
  };

  const formatInput = () => {
    const length = inputValue.length;
    if (length === 0) {
      return "";
    }

    if (length === 1) {
      return `0.0${inputValue}`;
    }

    if (length === 2) {
      return `0.${inputValue}`;
    }

    // Shift the digits from right to left
    let integerPart = inputValue.substring(0, length - 2);
    const decimalPart = inputValue.substring(length - 2, length);
    // Add commas for every thousand
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${integerPart}.${decimalPart}`;
  };

  return (
    <Input
      className="enter-amount"
      controls={false}
      value={formatInput()}
      onChange={handleInputChange}
      placeholder="0.00"
      prefix="₱"
      style={{ width: inputWidth }}
    />
  );
}

export default EnterAmount;
