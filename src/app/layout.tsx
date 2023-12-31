import type { Metadata } from "next";
import { Inter, Noto_Sans_Myanmar } from "next/font/google";
import "./globals.css";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Providers from "../providers/Providers";

const inter = Inter({ subsets: ["latin"] });
const mont = Noto_Sans_Myanmar({
    subsets: ["myanmar"],
    weight: "500",
    variable: "--font-mont",
});
export const metadata: Metadata = {
    title: "Focus",
    description: "Track your workouts",
    creator: "PedroCavallaro",
    keywords: ["workout", "treino"],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body
                className={`${inter.className} ${mont.variable} bg-[#080d1f] text-white`}
            >
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
