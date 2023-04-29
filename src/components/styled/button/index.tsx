import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { CgSpinner } from "react-icons/cg";
interface StyledButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "filled" | "flat";
  loading?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

const StyledButton = ({
  children,
  onClick,
  disabled = false,
  className = ``,
  size = "medium",
  variant = "filled",
  loading = false,
  type = 'button'
}: StyledButtonProps & PropsWithChildren) => {
  let textSize;
  switch (size) {
    case "small":
      textSize = `h-8 px-3 py-1 text-sm `;
      break;
    case "medium":
      textSize = `h-10 px-4 py-1 text-lg `;
      break;
    case "large":
      textSize = `h-12 px-5 py-2 text-xl `;
      break;
    default:
      textSize = `h-10 px-5 py-2 text-xl `;
      break;
  }
  let variantClass;
  switch (variant) {
    case "filled":
      variantClass = `btn-primary`;
      break;
    case "flat":
      variantClass = `btn-primary-flat`;
      break;
    default:
      variantClass = `btn-primary`;
      break;
  }
  return (
    <button
      className={
        `inline-block shrink-0 items-center justify-center ` +
        textSize +
        variantClass +
        ` ${className}`
      }
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
    >
      <div className="flex min-w-max shrink-0 items-center justify-center gap-2">
        {loading && <CgSpinner className="animate-spin" />}
        {children}
      </div>
    </button>
  );
};

export default StyledButton;
