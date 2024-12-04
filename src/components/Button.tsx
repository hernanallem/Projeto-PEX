import React from "react";
import { PiSignIn } from "react-icons/pi";
import { PiSignOut } from "react-icons/pi";

interface ButtonProps {
  type: "submit" | "button" | "reset";
  icon?: "SignIn" | "SignOut";
  text: string;
}

function Button({ type, text, icon }: ButtonProps) {
  const buttonIcon = () => {
    switch (icon) {
      case "SignIn":
        return <PiSignIn />;
      case "SignOut":
        return <PiSignOut />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-9 w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 text-base font-medium text-white outline-indigo-500 duration-500 hover:cursor-pointer hover:bg-indigo-700 focus:outline-indigo-700">
      {buttonIcon() && <span>{buttonIcon()}</span>}
      <button type={type}>
        <span>{text}</span>
      </button>
    </div>
  );
}

export default Button;
