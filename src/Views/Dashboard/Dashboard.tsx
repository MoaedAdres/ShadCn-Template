import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import RBreadcrumb from "@/RComponents/RBreadcrumb";
import RRoutes from "@/RComponents/RRoutes";
import { sidebarContent } from "@/RComponents/SidebarComponents/data/sidebarContent";
import RAppSidebar from "@/Layouts/RAppSidebar";
import { dashboardRoutes } from "@/routes/DashboardRoutes";
import { RootState } from "@/store/store";
import { createContext, useEffect, useState, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import RNavbar from "@/Layouts/RNavbar";
import BreadcrumbTracker from "@/utils/BreadCrumbTracker";

// Define the shape of the theme context
export interface ThemeContextType {
  theme: string;
  toggleTheme: (newTheme: string) => void;
}

// Create the ThemeContext with a default value of `undefined` initially
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export default function Dashboard() {
  const count = useSelector((state: RootState) => state.auth.id);
  // Define the theme state with type annotation
  const [theme, setTheme] = useState<string>("dark"); // Default theme
  useEffect(() => {
    // Apply saved theme from localStorage or use default
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.querySelector("html")?.setAttribute("data-theme", savedTheme);
    }
  }, []);

  // Define the toggleTheme function with its type
  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.querySelector("html")?.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Persist theme
  };

  return (
    <SidebarProvider>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <RAppSidebar contentData={sidebarContent} />
        <BreadcrumbTracker />
        <SidebarInset>
          <RNavbar />
          <div
            id="content wrapper"
            className="p-2 mt-1 overflow-y-auto  max-h-[90vh]"
          >
            <RRoutes routes={dashboardRoutes} />
          </div>
        </SidebarInset>
      </ThemeContext.Provider>
    </SidebarProvider>
  );
}
