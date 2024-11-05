import { SidebarMenuSubButton, SidebarMenuSubItem } from '@/components/ui/sidebar'

const RSubMenuSidebarItem = ({ subItem }: { subItem: any }) => {
    return (
        <SidebarMenuSubItem key={subItem.title}>
            <SidebarMenuSubButton asChild>
                <a href={subItem.url}>
                    <span>{subItem.title}</span>
                </a>
            </SidebarMenuSubButton>
        </SidebarMenuSubItem>)
}

export default RSubMenuSidebarItem