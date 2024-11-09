import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { SidebarItemProps } from "@/types/index.type";
import { renderSidebarItem } from "@/utils/renderSidebarItem";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const RCollapseSidebarItem = ({
  items,
  title,
  Icon,
  path,
}: SidebarItemProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <AccordionItem
      id="accordion item"
      key={title}
      value={title}
      hasBorder={false}
    >
      <SidebarMenuItem>
        <AccordionTrigger
          id="trigger"
          className="p-0 font-normal hover:no-underline"
        >
          {path ? (
            <NavLink
                to={path}
              className={({ isActive }) => {
                setIsActive(isActive);
                return "w-full";
              }}
            >
              <SidebarMenuButton className="cursor-pointer" isActive={isActive}>
                {Icon && <Icon />}
                <span>{t(title)}</span>
              </SidebarMenuButton>
            </NavLink>
          ) : (
            <SidebarMenuButton className="cursor-pointer" isActive={isActive}>
              {Icon && <Icon />}
              <span>{t(title)}</span>
            </SidebarMenuButton>
          )}
        </AccordionTrigger>
        <AccordionContent className="pb-0">
          {items?.map((item) => {
            return renderSidebarItem(item);
          })}
        </AccordionContent>
      </SidebarMenuItem>
    </AccordionItem>
  );
};

export default RCollapseSidebarItem;
