
import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import RDropdown from "@/RComponents/RDropDown"
import RFlex from "@/RComponents/RFlex"
import RIconSideBarMenuItem from "@/RComponents/SidebarComponents/RIconSideBarMenuItem"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items: {
      title: string
      url: string
    }[]
  }[]
}) {
  const { open: isSidebarOpened, openMobile: isSidebarMobileOpened } = useSidebar()
  console.log('isopened', isSidebarOpened)
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {isSidebarOpened || isSidebarMobileOpened ?
          <Accordion className="flex flex-col gap-1" type="multiple">
            {items.map((item) => (
              <AccordionItem
                key={item.title}
                value={item.title}
                hasBorder={false}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <AccordionTrigger className="p-0 font-normal hover:no-underline">
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </AccordionTrigger>
                  <AccordionContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </AccordionContent>
                </SidebarMenuItem>
              </AccordionItem>
            ))}
          </Accordion>
          : (
            items.map((item) => (
              <RIconSideBarMenuItem item={item} />
            ))
          )}
      </SidebarMenu>
    </SidebarGroup>
  )
}
