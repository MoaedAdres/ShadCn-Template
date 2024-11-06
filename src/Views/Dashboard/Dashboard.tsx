import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import RBreadcrumb from "@/RComponents/RBreadcrumb"
import RRoutes from "@/RComponents/RRoutes"
import { dashboardRoutes } from "@/routes/DashboardRoutes"
import { RootState } from "@/store/store"
import { useSelector } from "react-redux"

export default function Dashboard() {
  const count = useSelector((state: RootState) => state.auth.id)
  console.log("count", count)
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <RBreadcrumb />
          </div>
        </header>
        <RRoutes routes={dashboardRoutes} />
      </SidebarInset>
    </SidebarProvider>
  )
}
