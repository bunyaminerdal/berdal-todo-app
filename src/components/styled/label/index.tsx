import React, { PropsWithChildren } from "react";
interface props {
  className?: string;
  htmlFor?: string;
}
const StyledLabel = ({
  children,
  className = "",
  htmlFor,
}: PropsWithChildren & props) => {
  return (
    <div className="flex w-full items-center truncate">
      <label htmlFor={htmlFor} className={`inline-block w-32 ${className}`}>
        {children}
      </label>
    </div>
  );
};

export default StyledLabel;
