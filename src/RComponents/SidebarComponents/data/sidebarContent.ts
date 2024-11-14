import { SidebarItemType } from "@/constants/constant";
import { SidebarContentProps } from "@/types/index.type";
export const sidebarContent: SidebarContentProps[] = [
  {
    type: SidebarItemType.CONTENT,
    item: {
      type: SidebarItemType.NORMAL_MENU,
      title: "drivers",
      items: [
        {
          type: SidebarItemType.NORMAL_ITEM,
          title: "drivers", // Optional title for menu
          // items: [],
          path: "drivers",
          actions: [{ name: "Create_Driver" }],
        },
      ],
    },
  },
];
