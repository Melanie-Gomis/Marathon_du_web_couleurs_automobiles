import React from "react";

export default function Select({
  label,
  value,
  onChange,
  options = [],
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-xs font-medium text-text-muted uppercase tracking-wide">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full px-3 py-2 text-sm
          bg-white border border-border rounded-lg
          text-text
          focus:outline-none focus:ring-2 focus:ring-meetdeal-200 focus:border-meetdeal-400
          transition-all
          appearance-none
          cursor-pointer
        "
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 10px center",
          paddingRight: "32px",
        }}
      >
        {options.map((opt) => (
          <option key={opt.code ?? opt.value ?? opt} value={opt.code ?? opt.value ?? opt}>
            {opt.name ?? opt.label ?? opt}
          </option>
        ))}
      </select>
    </div>
  );
}
