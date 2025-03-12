import React from "react";
import Trash from "../assets/trash-can.svg";
import BlackSave from "../assets/Blacksave.svg";
import WhiteSave from "../assets/Whitesave.svg";
import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  type: "submit" | "button" | "reset" | "link";
  icon?: "Trash" | "Save";
  text: string;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "disabled";
  href?: string; // Adiciona a propriedade href para o tipo link
}

function Button({
  type,
  text,
  icon,
  disabled,
  variant = "primary",
  href,
}: ButtonProps) {
  const buttonIcon = () => {
    if (icon === "Save") {
      if (variant === "primary") {
        return WhiteSave;
      } else if (variant === "tertiary") {
        return BlackSave;
      }
    } else if (icon === "Trash") {
      return Trash;
    }
    return null;
  };

  const getButtonClasses = () => {
    switch (variant) {
      case "primary":
        return "flex rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-xs focus:outline-indigo-700 font-medium outline-indigo-500 text-base px-6 py-3 min-h-9 text-white outline outline-1 d-flex gap-2.5 items-center text-sm";
      case "secondary":
        return "flex rounded-2xl bg-white text-sm outline-indigo-500 text-red-600 px-6 py-3 min-h-9 text-red-600 hover:border-red-600 hover:bg-red-600 hover:text-white hover:border-red-300 border border-2 border-slate-300 d-flex gap-2.5 items-center font-medium";
      case "tertiary":
        return "flex rounded-2xl bg-white text-sm outline-indigo-500 hover:bg-slate-200 text-slate-900 text-red-600 px-6 py-2 min-h-9 text-slate-900 border border-2 border-slate-300 d-flex gap-2.5 items-center font-medium text-sm";
      case "disabled":
        return "flex rounded-2xl bg-white text-sm outline-indigo-500 text-red-600 px-6 py-2 min-h-9 text-slate-300 border border-2 border-slate-300 d-flex gap-2.5 items-center font-medium cursor-not-allowed text-sm";
      default:
        return "";
    }
  };

  const iconSrc = buttonIcon();

  // Validação para garantir que o href seja fornecido quando o tipo for "link"
  if (type === "link" && !href) {
    throw new Error("The 'href' prop is required when the type is 'link'.");
  }

  const buttonContent = (
    <>
      {iconSrc && <Image src={iconSrc} alt="Button Icon" />}
      <span>{text}</span>
    </>
  );

  if (type === "link" && href) {
    return (
      <Link href={href} className={getButtonClasses()}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type !== "link" ? type : undefined}
      className={getButtonClasses()}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
}

export default Button;
