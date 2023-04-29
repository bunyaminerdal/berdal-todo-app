import React, { ChangeEventHandler, RefObject, useState } from "react";

interface inputProps {
  label: string;
  type?: string;
  disabled?: boolean;
  variant?: "outlined" | "flat";
  className?: string;
  value?: string;
  inputRef?: RefObject<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
const Input = ({
  label,
  type = "text",
  disabled,
  variant = "outlined",
  className,
  value = "",
  inputRef,
  onChange,
}: inputProps) => {
  const [controlledValue, setControlledValue] = useState(value);
  return (
    <div className={`relative h-12 overflow-hidden ${className} `}>
      <input
        ref={inputRef}
        value={controlledValue}
        onChange={(e) => {
          onChange && onChange(e);
          setControlledValue(e.target.value);
        }}
        disabled={disabled}
        placeholder=" "
        type={type}
        className={`
        peer
        w-full
        min-w-full
        ${variant === "outlined" ? "rounded-md" : "rounded-t-md"}
        ${variant === "outlined" ? "border-2" : "border-b-2"}
        disabled:border-slate
        disabled:text-color
        border-primary-800
        bg-primary-200/30 p-1
        pl-2
        pt-4    
        font-light            
        outline-none
        transition
        focus:border-primary-600
        disabled:cursor-not-allowed
        disabled:border-primary-900
        
        `}
      />
      <label
        className={`
        absolute
          left-3
          inline-block shrink-0 truncate
          ${variant === "outlined" ? "top-[15px]" : "top-[13px]"}
          z-10
          origin-[0]
          -translate-y-4
          scale-75
          px-2
          text-lg
          opacity-70
          transition
          duration-150
          peer-placeholder-shown:-translate-y-1
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:opacity-100
          peer-disabled:text-slate-500
          ${
            variant === "outlined"
              ? "peer-focus:top-[15px]"
              : "peer-focus:top-[13px]"
          }
          pointer-events-none
          peer-focus:-translate-y-4
          peer-focus:scale-75
          peer-focus:opacity-70
          `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
