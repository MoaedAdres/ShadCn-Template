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
      type: SidebarItemType.GROUP,
      title: "Global",
      items: [
        {
          type: SidebarItemType.COLLAPSE_MENU,
          title: "Tools", // Optional title for menu
          items: [
            {
              type: SidebarItemType.COLLAPSE_ITEM,
              childPaths: [
                "dashboard/users",
                "dashboard/user-types",
                "dashboard/roles",
              ],
              title: "Users",
              Icon: SquareTerminal,
              path: "users",
              items: [
                {
                  title: "sub1",
                  type: SidebarItemType.SUB_MENU,
                  items: [
                    {
                      type: SidebarItemType.SUB_ITEM,
                      title: "Users",
                      path: "users",
                    },
                    {
                      type: SidebarItemType.SUB_ITEM,
                      title: "Roles",
                      path: "roles",
                    },
                    {
                      type: SidebarItemType.SUB_ITEM,
                      title: "User Types",
                      path: "user-types",
                    },
                  ],
                },
              ],
            },
            {
              type: SidebarItemType.COLLAPSE_ITEM,
              title: "Models",
              Icon: Bot,
              items: [
                {
                  type: SidebarItemType.SUB_MENU,
                  title: "sub2",
                  items: [
                    { type: SidebarItemType.SUB_ITEM, title: "Gensis" },
                    { type: SidebarItemType.SUB_ITEM, title: "Explorer" },
                    { type: SidebarItemType.SUB_ITEM, title: "Quantum" },
                  ],
                },
              ],
            },
            {
              type: SidebarItemType.COLLAPSE_ITEM,
              title: "Documentation",
              Icon: BookOpen,
              items: [
                {
                  type: SidebarItemType.SUB_MENU,
                  title: "sub3",
                  items: [
                    { type: SidebarItemType.SUB_ITEM, title: "Introduction" },
                    { type: SidebarItemType.SUB_ITEM, title: "Get Started" },
                    { type: SidebarItemType.SUB_ITEM, title: "Tutorials" },
                    { type: SidebarItemType.SUB_ITEM, title: "Changelog" },
                  ],
                },
              ],
            },
            {
              type: SidebarItemType.COLLAPSE_ITEM,
              title: "Settings",
              Icon: Settings,
              items: [
                {
                  type: SidebarItemType.SUB_MENU,
                  title: "sub3",
                  items: [
                    { type: SidebarItemType.SUB_ITEM, title: "General" },
                    { type: SidebarItemType.SUB_ITEM, title: "Team" },
                    { type: SidebarItemType.SUB_ITEM, title: "Billing" },
                    { type: SidebarItemType.SUB_ITEM, title: "Limits" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    type: SidebarItemType.CONTENT,
    item: {
      type: SidebarItemType.GROUP,
      title: "Games",
      items: [
        {
          type: SidebarItemType.NORMAL_MENU,
          title: "Tools", // Optional title for menu
          items: [
            {
              type: SidebarItemType.NORMAL_ITEM,
              title: "Playground",
              Icon: SquareTerminal,
              path: "playground",
              actions: [
                {
                  name: "delete",
                  Icon: DeleteIcon,
                  actionIconClass: "text-red-700",
                  actionTextClass: "text-red-700",
                },
                { name: "Edit", Icon: Edit },
              ],
            },
            {
              type: SidebarItemType.NORMAL_ITEM,
              title: "Models",
              Icon: Bot,
              items: [
                {
                  type: SidebarItemType.SUB_MENU,
                  title: "sub2",
                  items: [
                    { type: SidebarItemType.SUB_ITEM, title: "Gensis" },
                    { type: SidebarItemType.SUB_ITEM, title: "Explorer" },
                    { type: SidebarItemType.SUB_ITEM, title: "Quantum" },
                  ],
                },
              ],
            },
            {
              type: SidebarItemType.NORMAL_ITEM,
              title: "Documentation",
              Icon: BookOpen,
              items: [
                {
                  type: SidebarItemType.SUB_MENU,
                  title: "sub3",
                  items: [
                    { type: SidebarItemType.SUB_ITEM, title: "Introduction" },
                    { type: SidebarItemType.SUB_ITEM, title: "Get Started" },
                    { type: SidebarItemType.SUB_ITEM, title: "Tutorials" },
                    { type: SidebarItemType.SUB_ITEM, title: "Changelog" },
                  ],
                },
              ],
            },
            {
              type: SidebarItemType.NORMAL_ITEM,
              title: "Settings",
              Icon: Settings,
              items: [
                {
                  type: SidebarItemType.SUB_MENU,
                  title: "sub3",
                  items: [
                    { type: SidebarItemType.SUB_ITEM, title: "General" },
                    { type: SidebarItemType.SUB_ITEM, title: "Team" },
                    { type: SidebarItemType.SUB_ITEM, title: "Billing" },
                    { type: SidebarItemType.SUB_ITEM, title: "Limits" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    type: SidebarItemType.CONTENT,
    item: {
      type: SidebarItemType.COLLAPSE_MENU,
      title: "Tools", // Optional title for menu
      items: [
        {
          type: SidebarItemType.COLLAPSE_ITEM,
          title: "Playground",
          Icon: SquareTerminal,
          // path: "home",
          items: [
            {
              title: "sub1",
              type: SidebarItemType.SUB_MENU,
              items: [
                { type: SidebarItemType.SUB_ITEM, title: "History" },
                { type: SidebarItemType.SUB_ITEM, title: "Starred" },
                { type: SidebarItemType.SUB_ITEM, title: "Settings" },
              ],
            },
          ],
        },
      ],
    },
  },
];
