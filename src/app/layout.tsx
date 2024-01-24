import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Harry Zhu",
    description: "Personal Portfolio Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Provider>
                    <NavBar />
                    <main className="flex flex-col w-full items-center justify-center">{children}</main>
                </Provider>
            </body>
        </html>
    );
}
