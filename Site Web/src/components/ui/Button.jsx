import React from "react";

const variants = {
  primary:
    "bg-meetdeal-600 text-white hover:bg-meetdeal-700 shadow-sm hover:shadow-md",
  secondary:
    "bg-white text-meetdeal-700 border border-meetdeal-200 hover:bg-meetdeal-50",
  ghost:
    "bg-transparent text-text-muted hover:bg-surface-alt hover:text-text",
  danger:
    "bg-red-50 text-red-700 hover:bg-red-100",
};

const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-lg font-medium
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
