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
  icon?: LucideIcon;
  iconOnRight?: boolean;
  actionIconClass?: string;
  actionTextStyle?: string;
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

export type SidebarItem = {
  type: SidebarItemType;
  title?: string;
  icon?: LucideIcon;
  items?: SidebarItem[];
};
export type SidebarGroupItem = {
  title: string;
  type:
    | SidebarItemType.COLLAPSE_MENU
    | SidebarItemType.NORMAL_MENU
    | SidebarItemType.ICOM_MENU;
  items: [];
};
export type SidebarMenuItem = {};
