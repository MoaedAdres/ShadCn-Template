import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { SidebarItemType } from "@/constants/constant";
import RDropdown from "@/RComponents/RDropDown";
import { ActionItem, SidebarItemProps } from "@/types/index.type";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { t } from "i18next";
const RIconSideBarMenuItem = ({
  items,
  Icon,
  title,
  type,
  actions,
  path,
  childPaths,
}: SidebarItemProps) => {
  const location = useLocation();

  const [isActive, setIsActive] = useState<boolean>(false);
  const navigate = useNavigate();
  const childPathActive =
    (childPaths?.some((childPath) => location.pathname.includes(childPath)) ||
      (path && location.pathname.includes(path))) ??
    false;
  console.log("icon items", type);
  const getActions = (items: any) => {
    const innerAtions: ActionItem[] = [];
    // loop over the submenus inside the sidebar item
    items.map((item: any) => {
      // loop over the submenus subitems
      item?.items?.map((subItem: any) => {
        innerAtions.push({
          name: subItem.title,
          Icon: subItem.Icon,
          extraValue: { path: subItem.path },
        });
        // subItem.subItem && getActions(subItem.subItem); // if the subitem has an submenu also
      });
    });
    console.log("inner actions", innerAtions);
    return innerAtions;
  };

  // to get every title for the subitem in every submenu that the item has
  const finalActions =
    type == SidebarItemType.COLLAPSE_ITEM
      ? getActions(items)
      : actions
        ? actions
        : [];
  console.log("actions", actions);
  return (
    <SidebarMenuItem>
      {finalActions?.length <= 0 ? (
        path ? (
          <NavLink
            to={path}
            className={({ isActive }) => {
              setIsActive(isActive);
              return "";
            }}
          >
            <SidebarMenuButton
              tooltip={title}
              className="cursor-pointer"
              isActive={isActive}
            >
              {Icon && <Icon />}
              <span>{t(title)}</span>
            </SidebarMenuButton>
          </NavLink>
        ) : (
          <SidebarMenuButton tooltip={title} className="cursor-pointer" asChild>
            <div className="w-full px-2">{Icon && <Icon />}</div>
          </SidebarMenuButton>
        )
      ) : (
        <RDropdown
          triggerComponent={
            <SidebarMenuButton
              tooltip={title}
              className={`cursor-pointer ${childPathActive ? "bg-sidebar-accent" : ""}`}
              asChild
            >
              {Icon && <Icon />}
            </SidebarMenuButton>
          }
          actions={finalActions.map((action) => ({
            ...action,
            onClick: () => {
              action.extraValue?.path && navigate(action.extraValue?.path);
            },
          }))}
        />
      )}
    </SidebarMenuItem>
  );
};

export default RIconSideBarMenuItem;
