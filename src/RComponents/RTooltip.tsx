import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils"; 
import { RTooltipProps } from "@/types/index.type";
import React from "react";


const RTooltip: React.FC<RTooltipProps> = ({
	trigger = <span>Trigger Text</span>,
	tooltipText = "hoverText",
	triggerClassName = "w-fit",
	tooltipBackground = "bg-white text-black",
	delayDuration,
	side = "top",
}) => {
	return (
		<TooltipProvider delayDuration={delayDuration}>
			<Tooltip>
				<TooltipTrigger className={triggerClassName} asChild>
					{trigger}
				</TooltipTrigger>
				<TooltipContent side={side} className={cn("border-[1px]", tooltipBackground)}>
					{tooltipText}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

export default RTooltip;
