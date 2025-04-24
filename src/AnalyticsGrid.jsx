import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#00C49F", "#0088FE", "#FFBB28", "#FF8042"];

const AnalyticsGrid = ({ performanceData, portfolioData, stockData }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 40, marginTop: 40 }}>
      {/* Quarterly Performance */}
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

      {/* Portfolio Distribution */}
      <div style={{ backgroundColor: "#161b22", borderRadius: 12, padding: 20, flex: 1 }}>
        <h3 style={{ marginBottom: 16 }}>Portfolio Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={portfolioData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
              {portfolioData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Volume Trends */}
      <div style={{ backgroundColor: "#161b22", borderRadius: 12, padding: 20, marginTop: 40, width: "100%" }}>
        <h3 style={{ marginBottom: 16 }}>Volume Trends</h3>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={stockData}>
            <defs>
              <linearGradient id="colorVol" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4ade80" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4ade80" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Area type="monotone" dataKey="volume" stroke="#4ade80" fillOpacity={1} fill="url(#colorVol)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsGrid;
