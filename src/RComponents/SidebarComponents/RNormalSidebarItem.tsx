import { SidebarMenuAction, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import RDropdown from '@/RComponents/RDropDown'
import { Folder, Forward, MoreHorizontal, Trash2 } from 'lucide-react'

const actions: any = [
    {
        icon: <Folder className="text-muted-foreground" />,
        name: "View Project"
    },
    {
        icon: <Forward className="text-muted-foreground" />,
        name: "Share Project"
    },
    {
        icon: <Trash2 className="text-muted-foreground" />,
        name: "Delete Project"
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
            <RDropdown TriggerComponent={(
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