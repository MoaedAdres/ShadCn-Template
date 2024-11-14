import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RTooltipProps } from "@/types/index.type";
import React from "react";

const RTooltip: React.FC<RTooltipProps> = ({
  triggerComponent = <span>Trigger Text</span>,
  tooltipText = "hoverText",
  triggerClassName = "w-fit",
  contentClassName = "bg-secondary text-secondary-foreground",
  delayDuration = 100,
  side = "top",
}) => {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <Tooltip>
        <TooltipTrigger className={triggerClassName} asChild>
          {triggerComponent}
        </TooltipTrigger>
        <TooltipContent side={side} className={contentClassName}>
          {tooltipText}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default RTooltip;
