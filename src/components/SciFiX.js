import React from "react";

const SciFiX = ({ size = 120, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <defs>
        <linearGradient id="scifiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B9D" />
          <stop offset="25%" stopColor="#E879F9" />
          <stop offset="75%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>

      {/* Simple blocky X - two thick diagonal lines */}

      {/* First diagonal: top-left to bottom-right */}
      <rect
        x="5"
        y="35"
        width="90"
        height="30"
        fill="url(#scifiGradient)"
        transform="rotate(45 50 50)"
      />

      {/* Second diagonal: top-right to bottom-left */}
      <rect
        x="5"
        y="35"
        width="90"
        height="30"
        fill="url(#scifiGradient)"
        transform="rotate(-45 50 50)"
      />
    </svg>
  );
};

export default SciFiX;
