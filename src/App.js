import React from "react";
import "./App.css";
import PaymentForm from "./view/payment-form/PaymentForm";
import { ConfigProvider } from "antd";

function App() {
  return (
    <div className="App">
          <ConfigProvider
      theme={{
        token: {
          fontFamily: "Poppins, sans-serif" // Specify the font stack with fallback fonts
        }
      }}
    ></ConfigProvider>
        <PaymentForm />
    </div>
  );
}

export default App;
