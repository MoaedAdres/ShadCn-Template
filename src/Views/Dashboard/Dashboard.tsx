import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { sidebarContent } from "@/RComponents/SidebarComponents/data/sidebarContent";
import RAppSidebar from "@/Layouts/RAppSidebar";
import { createContext, useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import RNavbar from "@/Layouts/RNavbar";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Define the shape of the theme context
export interface DashboardContextType {
  theme: string;
  toggleTheme: (newTheme: string) => void;
  activeLanguage: string;
  switchLanguage: (language: string) => void;
}

// Create the ThemeContext with a default value of `undefined` initially
export const DashboardContext = createContext<DashboardContextType>({
  theme: "",
  toggleTheme: () => {},
  activeLanguage: "en",
  switchLanguage: () => {},
});

export default function Dashboard() {
  const [theme, setTheme] = useState<string>(""); // Default theme

  const [activeLanguage, setActiveLanguage] = useState<string>(
    localStorage.getItem("lang") || "en"
  );
  const { i18n } = useTranslation();

  const switchLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setActiveLanguage(language);
    document.querySelector("html")?.setAttribute("lang", language);
    localStorage.setItem("lang", language); // Persist theme
  };

  useEffect(() => {
    // Apply saved theme from localStorage or use default
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.querySelector("html")?.setAttribute("data-theme", savedTheme);
    }
    const language = localStorage.getItem("lang");
    if (language) {
      setActiveLanguage(language);
      i18n.changeLanguage(language);
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
      <DashboardContext.Provider
        value={{ theme, toggleTheme, activeLanguage, switchLanguage }}
      >
        <RAppSidebar contentData={sidebarContent} />
        {/* <BreadcrumbTracker /> */}
        <SidebarInset>
          <RNavbar />
          <div
            id="content wrapper"
            className="p-2 mt-1 overflow-y-auto  max-h-[90vh]"
          >
            <Outlet />
          </div>
        </SidebarInset>
      </DashboardContext.Provider>
    </SidebarProvider>
  );
}
