import { useContext } from "react";
import { DashboardContext, ThemeContextType } from '@/Views/Dashboard/Dashboard'

export const useTheme = (): ThemeContextType => {
    const context = useContext(DashboardContext);

    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
};
