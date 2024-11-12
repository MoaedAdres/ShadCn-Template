import { SidebarItemType } from "@/constants/constant";
import { LucideIcon } from "lucide-react";
import { ComponentType, MouseEventHandler, ReactNode } from "react";
import { RouteObject } from "react-router-dom";

export type CustomRoute = RouteObject & {
  exact?: boolean;
  breadcrumb?: string;
  routes?: CustomRoute[];
};

export type BreadCrumbObject = {
  path: string;
  title: string;
};

export type ActionItem = {
  name: string;
  onClick?: () => void;
  Icon?: any;
  iconOnRight?: boolean;
  actionIconClass?: string;
  actionTextClass?: string;
  component?: ReactNode;
  addSeparator?: boolean;
  extraValue?: any;
};
export type CheckActionItem = ActionItem & {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};
export type RDropdownProps = {
  triggerComponent?: ReactNode;
  label?: string | null;
  actions?: ActionItem[];
  onPointerDownHandler?: MouseEventHandler;
  itemClassName?: string;
  contentClassName?: string;
  side?: "bottom" | "right" | "top" | "left";
  align?: "center" | "end" | "start";
};

export type RCheckDropdownProps = {
  triggerComponent?: React.ReactNode;
  label?: string | React.ReactNode;
  actions: { [key: string]: CheckActionItem };
  setActions?: React.Dispatch<React.SetStateAction<any>>;
  contentClassName?: string;
  itemClassName?: string;
  multiFilter?: boolean;
  KeepActiveItemChecked?: boolean;
  side?: "bottom" | "right" | "top" | "left";
  align?: "center" | "end" | "start";
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
  childPaths?: string[];
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
  childPaths?: string[];
};

export type AllSidebarItemTypes =
  | SidebarGroupProps
  | SidebarMenuProps
  | SidebarItemProps
  | SidebarSubMenuProps
  | SidebarSubMenuItemProps;
