import React from "react";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CheckActionItem, RCheckDropdownProps } from "@/types/index.type";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/components/ui/sidebar";

// Define the structure of each action item

// Define the props for RCheckDropdown

const RCheckDropdown: React.FC<RCheckDropdownProps> = ({
  triggerComponent = null,
  label = null,
  actions = {},
  setActions,
  multiFilter = false,
  contentClassName,
  itemClassName,
  KeepActiveItemChecked,
  align,
  side,
}) => {
  const { isMobile } = useSidebar();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        {triggerComponent ? (
          triggerComponent
        ) : (
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <DotsHorizontalIcon className="h-4 w-4" />
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side={side ? side : isMobile ? "bottom" : "right"}
        align={align ? align : isMobile ? "end" : "start"}
        className={cn("w-48 rounded-lg", contentClassName)}
      >
        {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}
        {Object.keys(actions).map((key, index) => (
          <React.Fragment key={index}>
            <DropdownMenuCheckboxItem
              className={itemClassName}
              checked={actions[key].checked}
              onCheckedChange={() => {
                actions[key].onCheckedChange(actions[key].checked);
                if (setActions) {
                  if (multiFilter) {
                    setActions((oldActions: any) => ({
                      ...oldActions,
                      [key]: {
                        ...oldActions[key],
                        checked: !oldActions[key].checked,
                      },
                    }));
                  } else {
                    setActions((oldActions: any) => {
                      const newState: { [key: string]: CheckActionItem } = {};
                      Object.keys(oldActions).forEach((innerKey) => {
                        newState[innerKey] = {
                          ...oldActions[innerKey],
                          checked:
                            innerKey === key
                              ? KeepActiveItemChecked
                                ? true
                                : !oldActions[innerKey].checked
                              : false,
                        };
                      });
                      return newState;
                    });
                  }
                }
              }}
            >
              {actions[key].component ? (
                actions[key].component
              ) : (
                <>
                  {actions[key].Icon && !actions[key].iconOnRight && (
                    <i
                      className={`${actions[key].Icon} ${actions[key].actionIconClass}`}
                    />
                  )}
                  <span className={`${actions[key].actionTextClass}`}>
                    {actions[key].name}
                  </span>
                  {actions[key].Icon && actions[key].iconOnRight && (
                    <i
                      className={`${actions[key].Icon} ${actions[key].actionIconClass}`}
                    />
                  )}
                </>
              )}
            </DropdownMenuCheckboxItem>
            {actions[key].addSeparator && <DropdownMenuSeparator />}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RCheckDropdown;
