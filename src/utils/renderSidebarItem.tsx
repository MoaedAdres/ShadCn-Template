import { useSidebar } from "@/components/ui/sidebar";
import { SidebarItemType } from "@/constants/constant";
import RCollapseSidebarItem from "@/RComponents/SidebarComponents/RCollapseSidebarItem";
import RCollapseSidebarMenu from "@/RComponents/SidebarComponents/RCollapseSidebarMenu";
import RIconSidebarMenu from "@/RComponents/SidebarComponents/RIconSidebarMenu";
import RIconSideBarMenuItem from "@/RComponents/SidebarComponents/RIconSideBarMenuItem";
import RNormalSidebarItem from "@/RComponents/SidebarComponents/RNormalSidebarItem";
import RNormalSidebarMenu from "@/RComponents/SidebarComponents/RNormalSidebarMenu";
import RSidebarGroup from "@/RComponents/SidebarComponents/RSidebarGroup";
import RSubMenuSidebar from "@/RComponents/SidebarComponents/RSubMenuSidebar";
import RSubMenuSidebarItem from "@/RComponents/SidebarComponents/RSubMenuSidebarItem";
import { AllSidebarItemTypes } from "@/types/index.type";

export const renderSidebarItem = (item: AllSidebarItemTypes) => {
  console.log("item", item);
  const { open: isSidebarOpened, openMobile: isSidebarMobileOpened } =
    useSidebar();
  if (!isSidebarOpened && !isSidebarMobileOpened) {
    console.log("i am in", item.type);
    switch (item.type) {
      case SidebarItemType.COLLAPSE_ITEM:
      case SidebarItemType.NORMAL_ITEM:
      case SidebarItemType.ICON_ITEM:
        return <RIconSideBarMenuItem key={item.title} {...item} />;
    }
  }
  switch (item.type) {
    case SidebarItemType.GROUP:
      return <RSidebarGroup key={item.title} {...item} />;
    case SidebarItemType.COLLAPSE_MENU:
      return <RCollapseSidebarMenu key={item.title} {...item} />;
    case SidebarItemType.NORMAL_MENU:
      return <RNormalSidebarMenu key={item.title} {...item} />;
    case SidebarItemType.ICON_MENU:
      return <RIconSidebarMenu key={item.title} {...item} />;
    case SidebarItemType.COLLAPSE_ITEM:
      return <RCollapseSidebarItem key={item.title} {...item} />;
    case SidebarItemType.NORMAL_ITEM:
      return <RNormalSidebarItem key={item.title} {...item} />;
    case SidebarItemType.ICON_ITEM:
      return <RIconSideBarMenuItem key={item.title} {...item} />;
    case SidebarItemType.SUB_MENU:
      return <RSubMenuSidebar key={item.title} {...item} />;
    case SidebarItemType.SUB_ITEM:
      return <RSubMenuSidebarItem key={item.title} {...item} />;
    default:
      "wrong type";
  }
};
