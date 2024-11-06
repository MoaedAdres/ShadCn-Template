import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import RDropdown from '@/RComponents/RDropDown'
import { LucideIcon } from 'lucide-react'
import React from 'react'

const RIconSideBarMenuItem = ({ item }: { item: { title: string, icon: LucideIcon, items: any } }) => {
    return (
        <SidebarMenuItem>
            <RDropdown triggerComponent={((<SidebarMenuButton tooltip={item.title} className='cursor-pointer' asChild>
                <item.icon />
            </SidebarMenuButton>
            ))} actions={item.items?.map((subItem: any) => ({ name: subItem.title }))} />
        </SidebarMenuItem>
    )
}

export default RIconSideBarMenuItem