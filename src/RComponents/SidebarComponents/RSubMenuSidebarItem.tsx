import {
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { SidebarSubMenuItemProps } from "@/types/index.type";

const RSubMenuSidebarItem = ({
  title,
  type,
  Icon,
}: SidebarSubMenuItemProps) => {
  return (
    <SidebarMenuSubItem key={title}>
      <SidebarMenuSubButton asChild>
        <a href={"#"}>
          <span>{title}</span>
        </a>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
};

export default RSubMenuSidebarItem;
