import { Accordion, AccordionItem } from '@/components/ui/accordion'
import { SidebarMenu } from '@/components/ui/sidebar'

const RCollapseSidebarMenu = ({ items }: { items: any }) => {
    return (
        <SidebarMenu>
            <Accordion className="flex flex-col gap-1" type="multiple">
                {items.map((item:any) => (
                    <AccordionItem
                        key={item.title}
                        value={item.title}
                        hasBorder={false}
                    >

                    </AccordionItem>
                ))}
            </Accordion>
        </SidebarMenu>
    )
}

export default RCollapseSidebarMenu