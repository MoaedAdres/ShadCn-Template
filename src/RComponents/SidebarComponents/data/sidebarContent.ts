import { SidebarItemType } from "@/constants/constant";
import { BookOpen, Bot, SquareTerminal } from "lucide-react";

export const sidebarContent = [
  {
    type: SidebarItemType.GROUP,
    title: "Platform",
    items: [
      {
        type: SidebarItemType.COLLAPSE_MENU,
        items: [
          {
            type: SidebarItemType.COLLAPSE_ITEM,
            title: "Playground",
            icon: SquareTerminal,
            items: [
              {
                type: SidebarItemType.SUB_MENU,
                items: [
                  {
                    type: SidebarItemType.SUB_ITEM,
                    title: "History",
                  },
                  {
                    type: SidebarItemType.SUB_ITEM,
                    title: "Starred",
                  },
                  {
                    type: SidebarItemType.SUB_ITEM,
                    title: "Settings",
                  },
                ],
              },
            ],
          },
          {
            type: SidebarItemType.COLLAPSE_ITEM,
            title: "Models",
            icon: Bot,
            items: [
              {
                type: SidebarItemType.SUB_MENU,
                items: [
                  {
                    type: SidebarItemType.SUB_ITEM,
                    title: "Gensis",
                  },
                  {
                    type: SidebarItemType.SUB_ITEM,
                    title: "Explorer",
                  },
                  {
                    type: SidebarItemType.SUB_ITEM,
                    title: "Quantum",
                  },
                ],
              },
            ],
          },
          {
            type: SidebarItemType.COLLAPSE_ITEM,
            title: "Models",
            icon: BookOpen,
            items: [
              {
                type: SidebarItemType.SUB_MENU,
                items: [
                  {
                    type: SidebarItemType.SUB_ITEM,
                    title: "Introduction",
                  },
                  {
                    type: SidebarItemType.SUB_ITEM,
                    title: "Get Started",
                  },
                  {
                    type: SidebarItemType.SUB_ITEM,
                    title: "Tutorials",
                  },
                  {
                    type: SidebarItemType.SUB_ITEM,
                    title: "Changelog",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
