import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SideNavBar } from "@/components/layout/SideNavBar";
import { TopNavBar } from "@/components/layout/TopNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Atelier | Teknik Servis Yönetimi",
  description: "Teknik Atölyeler için Gelişmiş Yönetim Paneli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="light">
      <body className={`${inter.className} bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased`}>
        <SideNavBar />
        <main className="ml-64 min-h-screen flex flex-col">
          <TopNavBar />
          <div className="flex-1">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
