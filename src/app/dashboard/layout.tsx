import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export default function DashboardLayout ({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
    }