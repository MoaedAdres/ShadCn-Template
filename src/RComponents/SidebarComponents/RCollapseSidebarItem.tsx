import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { SidebarItemProps } from "@/types/index.type";
import { renderSidebarItem } from "@/utils/renderSidebarItem";

const RCollapseSidebarItem = ({ items, title, Icon }: SidebarItemProps) => {
  return (
    <AccordionItem id="accordion item" key={title} value={title} hasBorder={false}>
      <SidebarMenuItem>
        <AccordionTrigger
          id="trigger"
          className="p-0 font-normal hover:no-underline"
        >
          <SidebarMenuButton id="butttton" tooltip={title}>
            {Icon && <Icon />}
            <span>{title}</span>
          </SidebarMenuButton>
        </AccordionTrigger>
        <AccordionContent>
          {items?.map((item) => {
            return renderSidebarItem(item);
          })}
        </AccordionContent>
      </SidebarMenuItem>
    </AccordionItem>
  );
};

export default RCollapseSidebarItem;
