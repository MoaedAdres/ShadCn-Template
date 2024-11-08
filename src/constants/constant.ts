import RCollapseSidebarItem from "@/RComponents/SidebarComponents/RCollapseSidebarItem";
import RCollapseSidebarMenu from "@/RComponents/SidebarComponents/RCollapseSidebarMenu";
import RIconSidebarMenu from "@/RComponents/SidebarComponents/RIconSidebarMenu";
import RIconSideBarMenuItem from "@/RComponents/SidebarComponents/RIconSideBarMenuItem";
import RNormalSidebarItem from "@/RComponents/SidebarComponents/RNormalSidebarItem";
import RNormalSidebarMenu from "@/RComponents/SidebarComponents/RNormalSidebarMenu";
import RSidebarGroup from "@/RComponents/SidebarComponents/RSidebarGroup";
import RSubMenuSidebar from "@/RComponents/SidebarComponents/RSubMenuSidebar";
import RSubMenuSidebarItem from "@/RComponents/SidebarComponents/RSubMenuSidebarItem";

export enum SidebarItemType {
  CONTENT = "content",
  GROUP = "group",
  COLLAPSE_MENU = "collapseMenu",
  NORMAL_MENU = "normalMenu",
  ICON_MENU = "iconMenu",
  SUB_MENU = "subMenu",
  COLLAPSE_ITEM = "collapseItem",
  NORMAL_ITEM = "normalItem",
  ICON_ITEM = "iconItem",
  SUB_ITEM = "subItem",
}
export const mapSidebarItemTypeToComponent = {
  [SidebarItemType.GROUP]: RSidebarGroup,
  [SidebarItemType.COLLAPSE_MENU]: RCollapseSidebarMenu,
  [SidebarItemType.NORMAL_MENU]: RNormalSidebarMenu,
  [SidebarItemType.ICON_MENU]: RIconSidebarMenu,
  [SidebarItemType.SUB_MENU]: RSubMenuSidebar,
  [SidebarItemType.COLLAPSE_ITEM]: RCollapseSidebarItem,
  [SidebarItemType.NORMAL_ITEM]: RNormalSidebarItem,
  [SidebarItemType.ICON_ITEM]: RIconSideBarMenuItem,
  [SidebarItemType.SUB_ITEM]: RSubMenuSidebarItem,
};
