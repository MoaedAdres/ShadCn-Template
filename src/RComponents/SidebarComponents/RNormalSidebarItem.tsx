import { SidebarMenuAction, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import RDropdown from '@/RComponents/RDropDown'
import { ActionItem } from '@/types/index.type'
import { Folder, Forward, MoreHorizontal, Trash2 } from 'lucide-react'

const actions: ActionItem[] = [
    {
        icon: Folder,
        name: "View Project",
        actionIconClass: "text-muted-foreground"
    },
    {
        icon: Forward,
        name: "Share Project",
        actionIconClass: "text-muted-foreground"
    },
    {
        icon: Trash2,
        name: "Delete Project",
        actionIconClass: "text-muted-foreground"
    },
]

const RNormalSidebarItem = ({ item }: { item: any }) => {
    return (
        <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
                <a href={item.url}>
                    <item.icon />
                    <span>{item.name}</span>
                </a>
            </SidebarMenuButton>
            <RDropdown triggerComponent={(
                <SidebarMenuAction showOnHover>
                    <MoreHorizontal />
                    <span className="sr-only">More</span>
                </SidebarMenuAction>
            )}
                actions={actions} />
        </SidebarMenuItem>
    )
}

export default RNormalSidebarItem