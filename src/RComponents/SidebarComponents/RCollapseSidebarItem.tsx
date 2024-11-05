import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import RSubMenuSidebar from '@/RComponents/SidebarComponents/RSubMenuSidebar'

const RCollapseSidebarItem = ({ item }: any) => {
    return (
        <AccordionItem
            key={item.title}
            value={item.title}
            hasBorder={false}
        >
            <SidebarMenuItem>
                <AccordionTrigger className="p-0 font-normal hover:no-underline">
                    <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                    </SidebarMenuButton>
                </AccordionTrigger>
                <AccordionContent>
                    <RSubMenuSidebar subItems={item.items} />
                </AccordionContent>
            </SidebarMenuItem>
        </AccordionItem>

    )
}

export default RCollapseSidebarItem