import React from "react";

export function Button({ children, className, asChild, ...props }) {
  const Comp = asChild ? "span" : "button";
  return (
    <Comp
      className={`px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
