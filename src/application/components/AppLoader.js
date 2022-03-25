import React from "react";

export default function AppLoader({ text }) {
  return (
    <div
      style={{
        height: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="spinner-border mb-3" role="status">
        <span className="sr-only">Loading {text || ""}</span>
      </div>
      <h5>Please wait...</h5>
    </div>
  );
}
