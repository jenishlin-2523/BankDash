import React, { useState } from "react";
import Card from "../components/Card";

const Transactions = () => {
  const [filter, setFilter] = useState("all");

  const transactions = [
    { description: "Spotify Subscription", id: "#12548796", type: "Shopping", card: "1234 ****", date: "28 Jan, 12.30 AM", amount: -2500 },
    { description: "Freepik Sales", id: "#12548796", type: "Transfer", card: "1234 ****", date: "25 Jan, 10.40 PM", amount: 750 },
    { description: "Mobile Service", id: "#12548796", type: "Service", card: "1234 ****", date: "20 Jan, 10.40 PM", amount: -150 },
    { description: "Wilson", id: "#12548796", type: "Transfer", card: "1234 ****", date: "15 Jan, 03.29 PM", amount: -1050 },
    { description: "Emilly", id: "#12548796", type: "Transfer", card: "1234 ****", date: "14 Jan, 10.40 PM", amount: 840 },
  ];

  // filter logic
  const filteredTransactions =
    filter === "all"
      ? transactions
      : filter === "income"
      ? transactions.filter((t) => t.amount > 0)
      : transactions.filter((t) => t.amount < 0);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "30px", background: "#F9FAFB" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "500px", marginBottom: "20px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#6B7280" }}>My Cards</h2>
        <button 
          style={{ 
            background: "none", 
            padding: "4px 10px",
            color: "#6d7279ff", 
            fontSize: "14px", 
            fontWeight: "bold", 
            cursor: "pointer" 
          }}
        >
          + Add Card
        </button>
      </div>

      <div style={{ display: "flex", gap: "20px", marginBottom: "30px", }}>
        {/* Cards */}
        <Card type="primary" />
        <Card type="secondary" />

        {/* Expense Chart */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            borderRadius: "15px",
            background: "#ffffffff",
            border: "1px solid #E5E7EB",
            
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>My Expense</h3>
          <div style={{ height: "150px", display: "flex", alignItems: "end", gap: "30px" }}>
            {["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"].map((month, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "30px",
                    height: month === "Dec" ? "120px" : `${50 + i * 10}px`,
                    background: month === "Dec" ? "#16dbcc" : "#edf0f7",
                    borderRadius: "6px",
                  }}
                ></div>
                <p style={{ fontSize: "12px", marginTop: "5px" }}>{month}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "30px" }}>Recent Transactions</h2>
      <div style={{ display: "flex", gap: "80px", marginBottom: "20px" }}>
        <span
          onClick={() => setFilter("all")}
          style={{
            borderBottom: filter === "all" ? "2px solid #3B82F6" : "none",
            paddingBottom: "5px",
            cursor: "pointer",
            color: filter === "all" ? "#3B82F6" : "#6B7280",
            fontWeight: filter === "all" ? "bold" : "normal",
          }}
        >
          All Transactions
        </span>
        <span
          onClick={() => setFilter("income")}
          style={{
            borderBottom: filter === "income" ? "2px solid #3B82F6" : "none",
            paddingBottom: "5px",
            cursor: "pointer",
            color: filter === "income" ? "#3B82F6" : "#6B7280",
            fontWeight: filter === "income" ? "bold" : "normal",
          }}
        >
          Income
        </span>
        <span
          onClick={() => setFilter("expense")}
          style={{
            borderBottom: filter === "expense" ? "2px solid #3B82F6" : "none",
            paddingBottom: "5px",
            cursor: "pointer",
            color: filter === "expense" ? "#3B82F6" : "#6B7280",
            fontWeight: filter === "expense" ? "bold" : "normal",
          }}
        >
          Expense
        </span>
      </div>

      {/* Transactions Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white",
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr style={{ background: "#F3F4F6", textAlign: "left", color: "#6B7280"}}>
            <th style={{ padding: "12px" }}>Description</th>
            <th style={{ padding: "12px" }}>Transaction ID</th>
            <th style={{ padding: "12px" }}>Type</th>
            <th style={{ padding: "12px" }}>Card</th>
            <th style={{ padding: "12px" }}>Date</th>
            <th style={{ padding: "12px" }}>Amount</th>
            <th style={{ padding: "12px" }}>Receipt</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((t, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #E5E7EB" }}>
              <td style={{ padding: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                {/* Circle Icon with Arrow */}
                <span
                  style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  border: `2px solid ${t.amount > 0 ? "#6B7280" : "#6B7280"}`, // border color
  color: t.amount > 0 ? "#6B7280" : "#6B7280",                  // arrow color
  fontSize: "14px",
  fontWeight: "bold",
}}

                >
                  {t.amount > 0 ? "↑" : "↓"}
                </span>
                {t.description}
              </td>
              <td style={{ padding: "12px" }}>{t.id}</td>
              <td style={{ padding: "12px" }}>{t.type}</td>
              <td style={{ padding: "12px" }}>{t.card}</td>
              <td style={{ padding: "12px" }}>{t.date}</td>
              <td
                style={{
                  padding: "12px",
                  color: t.amount > 0 ? "#16dbcc" : "#fe6d81",
                  fontWeight: "bold",
                }}
              >
                {t.amount > 0 ? `+$${t.amount}` : `-$${Math.abs(t.amount)}`}
              </td>
              <td style={{ padding: "12px" }}>
                <button
                  style={{
                    padding: "6px 12px",
                    borderRadius: "100px",
                    border: "1px solid #3B82F6",
                    color: "#3B82F6",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span style={{ cursor: "pointer" }}>&lt; Previous</span>
        {[1, 2, 3, 4].map((n) => (
          <span
            key={n}
            style={{
              padding: "8px 12px",
              borderRadius: "10px",
              background: n === 1 ? "#3B82F6" : "transparent",
              color: n === 1 ? "white" : "#374151",
              cursor: "pointer",
            }}
          >
            {n}
          </span>
        ))}
        <span style={{ cursor: "pointer" }}>Next &gt;</span>
      </div>
    </div>
  );
};

export default Transactions;
