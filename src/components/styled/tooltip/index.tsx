import React, { PropsWithChildren, ReactNode, useState } from "react";

type TooltipProps = {
  text: string;
  bgColor?: string;
  textColor?: string;
  position?: "top-center" | "top-left" | "top-right";
};
enum positionMap {
  "top-center" = "left-1/2 top-0 -translate-x-1/2",
  "top-left" = "left-0 top-0",
  "top-right" = "right-0 top-0",
}
enum bubblePositionMap {
  "top-center" = "left-1/2 -translate-x-1/2",
  "top-left" = "left-3",
  "top-right" = "right-3",
}

const Tooltip = ({
  text,
  bgColor = "bg-primary-600",
  textColor = "text-slate-100",
  position = "top-center",
  children,
}: TooltipProps & PropsWithChildren) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isTooltipVisible && (
        <div
          className={`${positionMap[position]} absolute z-30 -translate-y-2`}
        >
          <div
            className={`absolute ${positionMap[position]} -translate-y-full transform whitespace-nowrap rounded-lg ${bgColor} p-2 text-lg ${textColor} `}
          >
            {text}
            <div
              className={`${bgColor} absolute -bottom-1 ${bubblePositionMap[position]} h-3 w-3 rotate-45 transform`}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Tooltip;
