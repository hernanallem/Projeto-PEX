// app/layout.tsx
import localFont from "next/font/local";
import "../globals.css";
import SessionWrapper from "../SessionWrapper";
import type { Metadata } from "next";

const geistInter = localFont({
  src: "../fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Projeto Petx",
  description:
    "Um sistema de gerenciamento interno para uma ONG de abrigo animal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon-cat.svg" />
      </head>
      <body className={`${geistInter.variable} antialiased`}>
        {/* Usa o SessionWrapper para fornecer o contexto de autenticação */}
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
