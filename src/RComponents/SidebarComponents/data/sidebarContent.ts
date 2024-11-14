import { SidebarItemType } from "@/constants/constant";
import { SidebarContentProps } from "@/types/index.type";
import {
  BookOpen,
  Bot,
  DeleteIcon,
  Edit,
  Settings,
  SquareTerminal,
} from "lucide-react";
export const sidebarContent: SidebarContentProps[] = [
  {
    type: SidebarItemType.CONTENT,
    item: {
      type: SidebarItemType.NORMAL_MENU,
      title: "Drivers",
      items: [
        {
          type: SidebarItemType.NORMAL_ITEM,
          title: "Drivers", // Optional title for menu
          // items: [],
          path: "drivers",
          actions: [{ name: "Create_Driver" }],
        },
      ],
    },
  },
];
