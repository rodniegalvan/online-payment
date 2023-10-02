import React, { useState } from "react";
import { Button, Form } from "antd";
import { users } from "../../../constant/User";
import EnterAmount from "../../../components/enter-amount/EnterAmount";
import bpi from "../../../assets/images/bpi.png";
import "./AccountForm.css";
import CardAccountGroup from "../../../components/card-account-group/CardAccountGroup";

function AccountForm({ onNext }) {
  const [form] = Form.useForm();
  const [selectedAccount, setSelectedAccount] = useState(null);

  const handleAccountChange = (value) => {
    setSelectedAccount(value);
    console.log(value); //1,2 or custom
  };

  const handleNextClick = async () => {
    try {
      await form.validateFields();
      if (!selectedAccount) {
        throw new Error("Please select an account.");
      }
      onNext(selectedAccount); // Pass the selected account to the next step
    } catch (errorInfo) {
      console.error("Validation failed:", errorInfo);
    }
  };

  return (
    <div>
      <img src={bpi} alt="BPI Logo" width="100" />
      <Form form={form} layout="horizontal" style={{ maxWidth: 600 }}>
        <p>Please Enter Amount</p>
        <Form.Item name="amount">
          <EnterAmount />
        </Form.Item>
        <p className="choose-debit">Choose what BPI account to debit from:</p>
        <Form.Item name="account">
          {/* Use the CardAccountGroup component */}
          <CardAccountGroup
            users={users}
            selectedAccount={selectedAccount}
            onAccountChange={handleAccountChange}
          />
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
