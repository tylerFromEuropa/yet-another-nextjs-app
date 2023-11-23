import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Tyler Reviews",
    description: "Your one stop shop for reviews.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="">{children}</body>
        </html>
    );
}
