import { useContext } from "react";
import { DashboardContext } from "@/Views/Dashboard/Dashboard";

type ThemeContextType = {
  theme: string;
  toggleTheme: (newTheme: string) => void;
};
export const useTheme = (): ThemeContextType => {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
