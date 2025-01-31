import React from "react";
import { IoSaveOutline } from "react-icons/io5";
import { MdOutlineMail, MdOutlineLock } from "react-icons/md";

interface TextFieldProps {
  placeholder: string;
  type: "text" | "password" | "email";
  icon?: "email" | "password" | "Save";
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextField({
  placeholder,
  type,
  icon,
  value,
  onChange,
}: TextFieldProps) {
  const inputIcon = () => {
    switch (icon) {
      case "email":
        return <MdOutlineMail className="text-2xl text-indigo-600" />;
      case "password":
        return <MdOutlineLock className="text-2xl text-indigo-600" />;
      case "Save":
        return <IoSaveOutline className="text-2xl text-indigo-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative flex items-center">
      {inputIcon() && <span className="absolute left-3">{inputIcon()}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border-1 w-full rounded-2xl border border-slate-400 px-6 py-3 pl-10 transition-all duration-200 ease-in-out hover:border-indigo-600 focus:outline-indigo-600 ${inputIcon() ? "pr-10" : ""}`}
      />
    </div>
  );
}

export default TextField;
