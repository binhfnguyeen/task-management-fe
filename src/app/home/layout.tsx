import { Metadata } from "next";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
    title: "Task management",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <main className="pt-16 min-h-screen">
                {children}
            </main>
            <Footer />
        </>
    )
}