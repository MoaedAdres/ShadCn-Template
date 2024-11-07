import { SidebarMenu } from "@/components/ui/sidebar";
import RIconSideBarMenuItem from "@/RComponents/SidebarComponents/RIconSideBarMenuItem";

const RIconSidebar = ({ items }: any) => {
  return (
    <SidebarMenu>
      {items.map((item: any) => (
        <RIconSideBarMenuItem item={item} />
      ))}
    </SidebarMenu>
  );
};

export default RIconSidebar;
