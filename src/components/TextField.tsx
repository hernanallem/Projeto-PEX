import React from "react";

interface TextFieldProps {
  placeholder: string;
  type: "text" | "password" | "email";
}

function TextField({ placeholder, type }: TextFieldProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border-1 w-full rounded-2xl border border-slate-400 px-6 py-3 transition-all duration-200 ease-in-out hover:border-indigo-600 focus:outline-indigo-600"
    />
  );
}

export default TextField;
