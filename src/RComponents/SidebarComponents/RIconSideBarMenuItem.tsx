import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { SidebarItemType } from "@/constants/constant";
import RDropdown from "@/RComponents/RDropDown";
import { ActionItem, SidebarItemProps } from "@/types/index.type";
import { NavLink } from "react-router-dom";

const RIconSideBarMenuItem = ({
  items,
  Icon,
  title,
  type,
  actions,
  path,
}: SidebarItemProps) => {
  console.log("icon items", type);
  const getActions = (items: any) => {
    const innerAtions: ActionItem[] = [];
    // loop over the submenus inside the sidebar item
    items.map((item: any) => {
      // loop over the submenus subitems
      item?.items?.map((subItem: any) => {
        innerAtions.push({ name: subItem.title, Icon: subItem.Icon });
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
        <SidebarMenuButton tooltip={title} className="cursor-pointer" asChild>
          {path ? (
            <NavLink to={path} className="w-full px-2">
              {Icon && <Icon />}
            </NavLink>
          ) : (
            <div className="w-full px-2">{Icon && <Icon />}</div>
          )}
        </SidebarMenuButton>
      ) : (
        <RDropdown
          triggerComponent={
            <SidebarMenuButton
              tooltip={title}
              className="cursor-pointer"
              asChild
            >
              {Icon && <Icon />}
            </SidebarMenuButton>
          }
          actions={finalActions}
        />
      )}
    </SidebarMenuItem>
  );
};

export default RIconSideBarMenuItem;
