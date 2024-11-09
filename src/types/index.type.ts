import { SidebarItemType } from "@/constants/constant";
import { LucideIcon } from "lucide-react";
import {
  ComponentType,
  ElementType,
  MouseEventHandler,
  ReactNode,
} from "react";

export type RouteObject = {
  id: number;
  name: string;
  path: string;
  exact: boolean;
  Component: ComponentType;
};

export type ActionItem = {
  name: string;
  onClick?: () => void;
  Icon?: LucideIcon;
  iconOnRight?: boolean;
  actionIconClass?: string;
  actionTextClass?: string;
  component?: ReactNode;
  addSeparator?: boolean;
};

export type RDropdownProps = {
  triggerComponent?: ReactNode;
  label?: string | null;
  actions?: ActionItem[];
  onPointerDownHandler?: MouseEventHandler;
  itemClassName?: string;
  contentClassName?: string;
};

export type SidebarContentProps = {
  type: SidebarItemType.CONTENT;
  item: SidebarGroupProps | SidebarMenuProps;
};
export type SidebarGroupProps = {
  title: string;
  type: SidebarItemType.GROUP;
  items: SidebarMenuProps[];
  Icon?: LucideIcon; // Add if `icon` is used in items
};
export type SidebarMenuProps = {
  title: string;
  type:
    | SidebarItemType.COLLAPSE_MENU
    | SidebarItemType.NORMAL_MENU
    | SidebarItemType.ICON_MENU;
  items: SidebarItemProps[];
};
export type SidebarItemProps = {
  title: string;
  type:
    | SidebarItemType.COLLAPSE_ITEM
    | SidebarItemType.NORMAL_ITEM
    | SidebarItemType.ICON_ITEM;
  items?: SidebarSubMenuProps[];
  Icon?: LucideIcon; // Add if `icon` is used in items
  path?: string;
  actions?: ActionItem[];
};
export type SidebarSubMenuProps = {
  title: string;
  type: SidebarItemType.SUB_MENU;
  items: SidebarSubMenuItemProps[];
};
export type SidebarSubMenuItemProps = {
  title: string;
  type: SidebarItemType.SUB_ITEM;
  Icon?: LucideIcon; // Add if `icon` is used in items
  path?: string;
  actions?: ActionItem[];
};

export type AllSidebarItemTypes =
  | SidebarGroupProps
  | SidebarMenuProps
  | SidebarItemProps
  | SidebarSubMenuProps
  | SidebarSubMenuItemProps;
