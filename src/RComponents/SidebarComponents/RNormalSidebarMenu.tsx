import { SidebarMenu } from '@/components/ui/sidebar'
import RNormalSidebarItem from '@/RComponents/SidebarComponents/RNormalSidebarItem'

const RNormalSidebarMenu = ({ items }: { items: any }) => {
  return (
    <SidebarMenu>
      {items.map((item: any) => (
        <RNormalSidebarItem item={item} />
      ))}
    </SidebarMenu>)
}

export default RNormalSidebarMenu