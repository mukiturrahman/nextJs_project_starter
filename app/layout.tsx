import { Plus_Jakarta_Sans } from "next/font/google";

import { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";

// Components
import Header from "@/components/header";
import Footer from "@/components/footer";

const fontSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Nextjs Project Starter Template",
    description: "Nextjs Project Starter Template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn("min-h-screen font-sans antialiased", fontSans.variable)}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
