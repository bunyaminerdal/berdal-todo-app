import React, { PropsWithChildren } from "react";

interface StyledButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "filled" | "outlined";
}

const StyledButton = ({
  children,
  onClick,
  disabled = false,
  className,
  size = "medium",
  variant = "filled",
}: StyledButtonProps & PropsWithChildren) => {
  let textSize;
  switch (size) {
    case "small":
      textSize = "h-8 px-3 py-1 text-sm ";
      break;
    case "medium":
      textSize = "h-10 px-4 py-1 text-lg ";
      break;
    case "large":
      textSize = "h-12 px-5 py-2 text-xl ";
      break;
    default:
      textSize = "h-10 px-5 py-2 text-xl ";
      break;
  }
  let variantClass;
  switch (variant) {
    case "filled":
      variantClass = `rounded bg-primary-600 [outlined]:bg-red-500 text-stone-50 transition hover:bg-primary-700 hover:text-stone-300`;
      break;
    case "outlined":
      variantClass = `rounded bg-primary-50  text-black transition hover:bg-primary-200 hover:text-black`;
      break;
    default:
      variantClass = "";
      break;
  }
  return (
    <button
      className={"outlined " + textSize + variantClass + ` ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default StyledButton;
