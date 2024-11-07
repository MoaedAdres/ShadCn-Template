import { SidebarGroup, SidebarGroupLabel } from '@/components/ui/sidebar'

const RSidebarGroup = ({ groupLabel }: any) => {
    console.log(groupLabel)
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
        </SidebarGroup>)
}

export default RSidebarGroup