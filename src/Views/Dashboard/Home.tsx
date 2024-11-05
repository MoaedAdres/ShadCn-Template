import { useSidebar } from '@/components/ui/sidebar';

const Home = () => {
    const { isMobile } = useSidebar()
    console.log("mobile", isMobile)
    return (
        <div>Home </div>
    )
}

export default Home