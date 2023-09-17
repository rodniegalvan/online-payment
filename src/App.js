import React from "react";
import "./App.css";
import PaymentForm from "./components/payment-form/PaymentForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Online Payment</h1>
      </header>
      <main>
        <PaymentForm />
      </main>
    </div>
  );
}

export default App;
