import React, { useState } from "react";
import { Button, Form, Radio } from "antd";
import { users } from "../../../constant/User";
import EnterAmount from "../../../components/enter-amount/EnterAmount";
import bpi from "../../../assets/images/bpi.png";
import "./AccountForm.css";

function AccountForm({ onNext }) {
  const [form] = Form.useForm();
  const [selectedAccount, setSelectedAccount] = useState(null);

  const handleAccountChange = (value) => {
    setSelectedAccount(value);
  };

  const handleNextClick = async () => {
    try {
      await form.validateFields();
      onNext(selectedAccount); // Pass the selected account to the next step
    } catch (errorInfo) {
      console.error("Validation failed:", errorInfo);
    }
  };

  const maskCardNumber = (cardNumber) => {
    const cardNumberArray = cardNumber.split(" "); // Split the card number by spaces
    const lastPart = cardNumberArray.pop(); // Get the last part (last 4 digits)
    const maskedCardNumber = cardNumberArray
      .map((part) => "*".repeat(part.length))
      .join(" "); // Mask the rest
    return `${maskedCardNumber} ${lastPart}`;
  };

  return (
    <div>
      <img src={bpi} alt="BPI Logo" width="100" />
      <Form form={form} layout="horizontal" style={{ maxWidth: 600 }}>
        <h2>Enter Amount</h2>
        <Form.Item name="amount">
          <EnterAmount />
        </Form.Item>
        <Form.Item
          name="account"
          rules={[{ required: true, message: "Please select an account." }]}
        >
          <div className="debit-account-group">
            <Radio.Group
              onChange={handleAccountChange}
              value={selectedAccount}
              name="debit-accounts"
            >
              {users.map(
                (user) =>
                  user.id === 1 && //soon it change to who is login
                  user.bankAccounts.map((account) => (
                    <Radio
                      key={account.id}
                      value={account.id}
                      className="debit-account-radio"
                    >
                      <span className="radio-label">
                        {maskCardNumber(account.cardNumber)} - {account.type} (
                        {account.paymentMethod})
                      </span>
                    </Radio>
                  ))
              )}
              <Radio
                value="custom"
                className="debit-account-radio"
                onChange={() => setSelectedAccount("custom")}
              >
                <span className="radio-label">Add New Bank Account</span>
              </Radio>
            </Radio.Group>
          </div>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleNextClick}>
            PAY NOW
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AccountForm;
