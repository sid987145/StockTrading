import React, { useState } from "react";
import apple from "./assets/apple.svg";

export default function StockOverview() {
  const [expanded, setExpanded] = useState(false);
  const fullText = `Cipla is trading -0.89% lower at Rs 1,459.05 as compared to its last closing price. Cipla has been trading in the price range of 1,482.20 & 1,438.75. Cipla has given -4.55% in this year & -0.87% in the last 5 days. Cipla has TTM P/E ratio 24.74 as compared to the sector average and is currently undervalued due to recent corrections in the healthcare index.`;
  const previewText =
    "Cipla is trading -0.89% lower at Rs 1,459.05 as compared to its last closing price. Cipla has been trading in the price range of 1,482.20 & 1,438.75. Cipla has given -4.55% in this year & -0.87% in the last 5 days. Cipla has TTM P/E ratio 24.74 as compared to the sect .....";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "12px" }}>
        <div
          style={{
            width: 56,
            height: 56,
            backgroundColor: "#fff",
            borderRadius: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={apple} alt="Apple Logo" style={{ width: 40, height: 40 }} />
        </div>

        <div>
          <h2 style={{ margin: 0, fontWeight: 500 }}>Apple Inc.</h2>
          <div style={{ fontSize: 20, fontWeight: "bold", margin: "4px 0" }}>
            $25,901
            <span
              style={{
                backgroundColor: "#0f5132",
                color: "#d1e7dd",
                fontSize: 12,
                padding: "2px 6px",
                borderRadius: 8,
                marginLeft: 8,
              }}
            >
              ▲ 0.27%
            </span>
          </div>
          <div style={{ fontSize: 13, color: "#aaa" }}>
            28 January, 4:00pm EST | Market Open
          </div>
        </div>
      </div>

      <hr style={{ borderColor: "#222", margin: "20px 0" }} />

      <p style={{ fontSize: 15, lineHeight: 1.6 }}>
        {expanded ? fullText : previewText}{" "}
        {!expanded && (
          <span
            onClick={() => setExpanded(true)}
            style={{ fontWeight: "bold", textDecoration: "underline", cursor: "pointer" }}
          >
            see more
          </span>
        )}
      </p>
    </div>
  );
}
