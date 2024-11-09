import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { SidebarMenu, useSidebar } from "@/components/ui/sidebar";
import { SidebarItemType } from "@/constants/constant";
import RIconSidebarMenu from "@/RComponents/SidebarComponents/RIconSidebarMenu";
import { SidebarMenuProps } from "@/types/index.type";
import { renderSidebarItem } from "@/utils/renderSidebarItem";

const RCollapseSidebarMenu = ({ title, items, type }: SidebarMenuProps) => {
  const { open: isSidebarOpened, openMobile: isSidebarMobileOpened } =
    useSidebar();
  const isOpen = isSidebarMobileOpened || isSidebarOpened;
  return (
    <SidebarMenu className={isOpen ? "px-1" : ""}>
      <Accordion id="accordion" className="flex flex-col gap-1" type="multiple">
        {items.map((item) => renderSidebarItem(item))}
      </Accordion>
    </SidebarMenu>
  );
};

export default RCollapseSidebarMenu;
