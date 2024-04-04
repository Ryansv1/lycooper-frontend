export default function AuthLayout ({ children }: { children: React.ReactNode }) {
    return (
        <>
        <div className="bg-blue-950 flex-1 flex flex-col justify-center items-center">
            {children}
        </div>
        </>
    )
    }