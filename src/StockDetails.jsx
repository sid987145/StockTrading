import React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const performanceData = [
  { name: "Q1", value: 4000 },
  { name: "Q2", value: 3000 },
  { name: "Q3", value: 2000 },
  { name: "Q4", value: 2780 },
];

const portfolioDistribution = [
  { name: "Stocks", value: 400 },
  { name: "Bonds", value: 300 },
  { name: "Cash", value: 300 },
  { name: "Others", value: 200 },
];

const COLORS = ["#00C49F", "#0088FE", "#FFBB28", "#FF8042"];

const stockPriceData = [
  { date: "Apr 14", price: 85, volume: 2400 },
  { date: "Apr 15", price: 78, volume: 1398 },
  { date: "Apr 16", price: 90, volume: 9800 },
  { date: "Apr 17", price: 88, volume: 3908 },
  { date: "Apr 18", price: 92, volume: 4800 },
  { date: "Apr 19", price: 87, volume: 3800 },
  { date: "Apr 20", price: 92.96, volume: 4300 },
];

export default function StockDetails() {
  return (
    <>
      {/* Performance & Portfolio */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 40, marginTop: 40 }}>
        <div style={{ backgroundColor: "#161b22", borderRadius: 12, padding: 20, flex: 1 }}>
          <h3 style={{ marginBottom: 16 }}>Quarterly Performance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#222" />
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{ backgroundColor: "#161b22", borderRadius: 12, padding: 20, flex: 1 }}>
          <h3 style={{ marginBottom: 16 }}>Portfolio Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={portfolioDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {portfolioDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Volume Trends */}
      <div style={{ backgroundColor: "#161b22", borderRadius: 12, padding: 20, marginTop: 40 }}>
        <h3 style={{ marginBottom: 16 }}>Volume Trends</h3>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={stockPriceData}>
            <defs>
              <linearGradient id="colorVol" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4ade80" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4ade80" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="volume"
              stroke="#4ade80"
              fillOpacity={1}
              fill="url(#colorVol)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Peer Comparison */}
      <div style={{ backgroundColor: "#161b22", borderRadius: 12, padding: 20, marginTop: 40 }}>
        <h3 style={{ marginBottom: 16 }}>Peer Comparison</h3>
        <table style={{ width: "100%", borderCollapse: "collapse", color: "#ccc", fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #333" }}>
              <th align="left">Company</th>
              <th align="right">Price</th>
              <th align="right">P/E</th>
              <th align="right">Change</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Apple", price: 25901, pe: 28.4, change: "+0.27%" },
              { name: "Microsoft", price: 23900, pe: 31.2, change: "+0.12%" },
              { name: "Amazon", price: 19800, pe: 45.1, change: "-0.55%" },
            ].map((row, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #222" }}>
                <td>{row.name}</td>
                <td align="right">${row.price.toLocaleString()}</td>
                <td align="right">{row.pe}</td>
                <td align="right" style={{ color: row.change.includes("-") ? "#f87171" : "#4ade80" }}>
                  {row.change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Risk Section */}
      <div style={{ backgroundColor: "#161b22", borderRadius: 12, padding: 20, marginTop: 40 }}>
        <h3 style={{ marginBottom: 16 }}>Caution & Risks</h3>
        <details style={{ color: "#ccc", cursor: "pointer" }}>
          <summary style={{ fontWeight: "bold", marginBottom: 8 }}>Market Volatility</summary>
          <p style={{ marginTop: 8, lineHeight: 1.6 }}>
            Stock prices are subject to market fluctuations due to geopolitical risks, inflation data,
            and investor sentiment. Diversification and regular review are recommended.
          </p>
        </details>
      </div>
    </>
  );
}
