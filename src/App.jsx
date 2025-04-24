import React from "react";
import StockOverview from "./StockOverview";
import StockDetails from "./StockDetails";

export default function App() {
  return (
    <div style={{ backgroundColor: "#0d1117", color: "#c9d1d9", minHeight: "100vh", padding: 40 }}>
      <h1 style={{ fontSize: 32, marginBottom: 20 }}>Stock Dashboard</h1>
      <StockOverview />
      <StockDetails />
    </div>
  );
}
