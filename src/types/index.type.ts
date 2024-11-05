import { ComponentType, ElementType, MouseEventHandler, ReactNode } from "react"

export type RouteObject = {
    id: number
    name: string
    path: string,
    exact: boolean
    Component: ComponentType
}

export type ActionItem = {
    name: string;
    onClick?: () => void;
    icon?: ElementType;
    iconOnRight?: boolean;
    actionIconClass?: string;
    actionTextStyle?: string;
    component?: ReactNode;
    addSeparator?: boolean;
}

export type RDropdownProps = {
    TriggerComponent?: ReactNode;
    label?: string | null;
    actions?: ActionItem[];
    onPointerDownHandler?: MouseEventHandler;
    itemClassName?: string;
    contentClassName?: string;
}