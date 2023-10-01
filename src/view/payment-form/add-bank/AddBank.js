import React, { useState } from "react";
import { Form, Input, Button, DatePicker, InputNumber } from "antd";

function AddBank({ customAccountData, onNext }) {
  const [form] = Form.useForm();

  const handleNextClick = async () => {
    try {
      await form.validateFields();
      onNext();
    } catch (errorInfo) {
      console.error("Validation failed:", errorInfo);
    }
  };

  return (
    <div>
      <Form form={form} layout="horizontal" style={{ maxWidth: 600 }}>
        <h2>Add New Bank Account</h2>
        <Form.Item
          name="cardName"
          label="Cardholder Name"
          rules={[
            { required: true, message: "Please enter the cardholder's name." },
          ]}
        >
          <Input placeholder="Cardholder Name" />
        </Form.Item>
        <Form.Item
          name="cardNumber"
          label="Card Number"
          rules={[
            { required: true, message: "Please enter the card number." },
            { max:16},
          ]}
        >
          <Input placeholder="Card Number" style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="expirationDate"
          label="Expiration Date"
          rules={[
            {
              required: true,
              message: "Please enter the card's expiration date.",
            },
            {
              validator: (_, value) => {
                if (value && value.isAfter(new Date())) {
                  return Promise.resolve();
                }
                return Promise.reject("Card has expired.");
              },
            },
          ]}
        >
          <DatePicker
            style={{ width: "100%" }}
            format="MM/YYYY"
            placeholder="MM/YYYY"
          />
        </Form.Item>
        <Form.Item
          name="cvv"
          label="CVV"
          rules={[
            { required: true, message: "Please enter the CVV." },
            { max: 3, message: "CVV must be 3 digits." },
          ]}
        >
          <Input placeholder="CVV" style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleNextClick}>
            NEXT
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddBank;
