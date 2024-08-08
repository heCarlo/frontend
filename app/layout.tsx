import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientLayout from "../components/ClientLayout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Company'",
  description: "Esse é um site de gerenciamento de manutenção da Company'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} flex`}>
        <ClientLayout>
          <main className="flex-grow p-4 mt-16 overflow-auto">
            {children}
          </main>
        </ClientLayout>
      </body>
    </html>
  );
}
