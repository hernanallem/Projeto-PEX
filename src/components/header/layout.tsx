import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

const geistInter = localFont({
  src: "../fonts/Inter.woff",
  variable: "--font-geist-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Projeto Petx",
  description: `Um sistema de gerenciamento interno para uma ONG de abrigo animal. O sistema vai contar com login, página de dashboard, paginas de cadastro e gerenciamento dos animais.
  <br>
  É um projeto de extensão da faculdade, sendo desenvolvido em grupo.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistInter.variable} antialiased`}>{children}</body>
    </html>
  );
}
