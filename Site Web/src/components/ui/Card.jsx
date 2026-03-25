import React from "react";

export default function Card({
  children,
  className = "",
  padding = "p-5",
  hover = false,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-xl border border-border shadow-sm
        ${padding}
        ${hover ? "hover:shadow-md hover:border-meetdeal-200 transition-all cursor-pointer" : ""}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return (
    <div className={`flex items-center justify-between mb-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "" }) {
  return (
    <h3 className={`text-sm font-semibold text-text-muted uppercase tracking-wide ${className}`}>
      {children}
    </h3>
  );
}
