import { SidebarItemType } from "@/constants/constant";
import { SidebarContentProps } from "@/types/index.type";
import { Car, Users2 } from "lucide-react";
export const sidebarContent: SidebarContentProps[] = [
  {
    type: SidebarItemType.CONTENT,
    item: {
      type: SidebarItemType.GROUP,
      title: "Menu",
      items: [
        {
          type: SidebarItemType.NORMAL_MENU,
          title: "drivers",
          items: [
            {
              type: SidebarItemType.NORMAL_ITEM,
              Icon: Users2,
              title: "drivers", // Optional title for menu
              // items: [],
              path: "drivers",
              actions: [{ name: "Create_Driver" }],
            },
            {
              type: SidebarItemType.NORMAL_ITEM,
              Icon: Car,
              title: "cars", // Optional title for menu
              // items: [],
              path: "cars",
              // actions: [{ name: "Create_Driver" }],
            },
          ],
        },
      ],
    },
  },
];
