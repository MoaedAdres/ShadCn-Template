import { SidebarMenuSub } from '@/components/ui/sidebar'
import RSubMenuSidebarItem from '@/RComponents/SidebarComponents/RSubMenuSidebarItem'

const RSubMenuSidebar = ({ subItems }: { subItems: any }) => {
    return (
        <SidebarMenuSub>
            {subItems?.map((subItem: any) => (
                <RSubMenuSidebarItem subItem={subItem} />
            ))}
        </SidebarMenuSub>)
}

export default RSubMenuSidebar