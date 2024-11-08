import React from "react";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import RFlex from "@/RComponents/RFlex";
import { RDropdownProps } from "@/types/index.type";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";



const RDropdown: React.FC<RDropdownProps> = ({
    triggerComponent = null,
    label = null,
    actions = [],
    onPointerDownHandler,
    itemClassName,
    contentClassName
}) => {
    const { isMobile } = useSidebar()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                asChild
                onPointerDown={(e) => {
                    onPointerDownHandler && onPointerDownHandler(e);
                }}
            >
                {triggerComponent ? (
                    triggerComponent
                ) : (
                    <Button variant="ghost" className="h-fit w-fit p-0">
                        <span className="sr-only">Open menu</span>
                        <DotsHorizontalIcon className="h-4 w-4" />
                    </Button>
                )}
            </DropdownMenuTrigger>
            <DropdownMenuContent
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
                className={cn("w-48 rounded-lg", contentClassName)}

            >
                {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}

                {actions.map((action, index) => (
                    <React.Fragment key={index}>
                        <DropdownMenuItem
                            onClick={(e) => {
                                e.stopPropagation();
                                action.onClick && action.onClick();
                            }}
                            className={itemClassName}
                        >
                            {action.component ? (
                                action.component
                            ) : (
                                <>
                                    {action.Icon && !action.iconOnRight && <action.Icon className={action.actionIconClass} />}
                                    <span className={`${action.actionTextClass} cursor-pointer`}>{action.name}</span>
                                    {action.Icon && action.iconOnRight && <action.Icon className={action.actionIconClass} />}
                                </>
                            )}
                        </DropdownMenuItem>
                        {action.addSeparator && <DropdownMenuSeparator />}
                    </React.Fragment>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default RDropdown;
