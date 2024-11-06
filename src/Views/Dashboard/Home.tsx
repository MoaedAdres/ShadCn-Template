import { useSidebar } from '@/components/ui/sidebar';
import { useTheme } from '@/hooks/use-theme';

const Home = () => {
    const { isMobile } = useSidebar()
    const { theme } = useTheme()
    console.log("mobile", theme)
    return (
        <div>Home </div>
    )
}

export default Home