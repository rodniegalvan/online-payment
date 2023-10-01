import React from "react";
import { maskCardNumber } from "../../utils/maskCardNumber";
import "./CardAccountGroup.css";
import { BsCreditCard2Back } from "react-icons/bs";

function CardAccountGroup({ users, selectedAccount, onAccountChange }) {

  return (
    <div className="card-account-wrapper">
      <div className="card-account-group">
        {users.map(
          (user) =>
            user.id === 1 && (
              user.bankAccounts.map((account) => (
                <div key={account.id} className="card-account-item">
                  <label htmlFor={`account-${account.id}`} className="card-account-label">
                    <input
                      type="radio"
                      id={`account-${account.id}`}
                      name="card-accounts"
                      value={account.id}
                      checked={selectedAccount === account.id}
                      onChange={() => onAccountChange(account.id)}
                    />
                    <div className="card-account-details">
                      <img
                        src={account.cardTypeImg}
                        alt="Card"
                        className="card-image"
                      />
                      <div className="card-info">
                        <span className="radio-label">
                          {maskCardNumber(account.cardNumber)}
                        </span>
                        <span className="expiration-date">
                          Expires: {account.expirationDate}
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
              ))
            )
        )}
        <div className="card-account-item">
          <label htmlFor="custom" className="card-account-label">
            <input
              type="radio"
              id="custom"
              name="card-accounts"
              value="custom"
              checked={selectedAccount === "custom"}
              onChange={() => onAccountChange("custom")}
            />
            <div className="card-account-details">
              <BsCreditCard2Back />
              <span className="radio-label">Add New Bank Account</span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default CardAccountGroup;
