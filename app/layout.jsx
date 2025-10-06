import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollToTopButton } from "@/components/Buttons";
import I18nProvider from "@/components/i18nProvider";
import ReduxProvider from "@/components/ReduxProvider";
import GlobalFetchProvider from '@/components/GlobalFetchProvider';
import { WhatsappAnimation } from "@/components/WhatsappAnimation";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Aksu Mekanik",
    description: "Aksu Mekanik - Isıtma, Soğutma, Havalandırma Sistemleri",
};

export default function RootLayout({
    children,
}) {
    return (
        <html lang="tr">
            <head>
                <link rel="icon" href="/images/secondaryLogo1.ico" type="image/x-icon" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
            >
                <ReduxProvider>
                    <GlobalFetchProvider>
                        <I18nProvider>
                            <Header />
                            {children}
                            <WhatsappAnimation />
                            <ScrollToTopButton />
                            <Footer />
                        </I18nProvider>
                    </GlobalFetchProvider>
                </ReduxProvider>
            </body>
        </html>
    );
}
