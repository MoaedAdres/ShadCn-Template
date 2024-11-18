import { SidebarItemType } from "@/constants/constant";
import { SidebarContentProps } from "@/types/index.type";
import { Car, Handshake, List, Users2 } from "lucide-react";
export const sidebarContent: SidebarContentProps[] = [
  {
    type: SidebarItemType.CONTENT,
    item: {
      type: SidebarItemType.GROUP,
      title: "Menu",
      items: [
        {
          type: SidebarItemType.COLLAPSE_MENU,
          title: "drivers",
          items: [
            {
              type: SidebarItemType.COLLAPSE_ITEM,
              Icon: Users2,
              childPaths: ["drivers", "join-requests"],
              title: "drivers", // Optional title for menu
              items: [
                {
                  title: "drivers1",
                  type: SidebarItemType.SUB_MENU,
                  items: [
                    {
                      type: SidebarItemType.SUB_ITEM,
                      title: "all_drivers",
                      Icon: Users2,
                      path: "drivers",
                    },
                    {
                      type: SidebarItemType.SUB_ITEM,
                      title: "join_requests",
                      Icon: List,
                      path: "join-requests",
                    },
                  ],
                },
              ],
            },
            {
              type: SidebarItemType.NORMAL_ITEM,
              Icon: Handshake,
              title: "customers",
              path: "customers",
            },
          ],
        },
      ],
    },
  },
];
