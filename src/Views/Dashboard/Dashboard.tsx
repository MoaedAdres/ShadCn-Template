import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import RBreadcrumb from "@/RComponents/RBreadcrumb";
import RRoutes from "@/RComponents/RRoutes";
import { dashboardRoutes } from "@/routes/DashboardRoutes";
import { RootState } from "@/store/store";
import { createContext, useEffect, useState, ReactNode } from "react";
import { useSelector } from "react-redux";

// Define the shape of the theme context
export interface ThemeContextType {
  theme: string;
  toggleTheme: (newTheme: string) => void;
}

// Create the ThemeContext with a default value of `undefined` initially
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function Dashboard() {
  const count = useSelector((state: RootState) => state.auth.id);

  // Define the theme state with type annotation
  const [theme, setTheme] = useState<string>('dark'); // Default theme

  useEffect(() => {
    // Apply saved theme from localStorage or use default
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.querySelector("html")?.setAttribute("data-theme", savedTheme);
    }
  }, []);

  // Define the toggleTheme function with its type
  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.querySelector("html")?.setAttribute("data-theme", newTheme);
    localStorage.setItem('theme', newTheme); // Persist theme
  };

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
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <RRoutes routes={dashboardRoutes} />
        </ThemeContext.Provider>
      </SidebarInset>
    </SidebarProvider>
  );
}
