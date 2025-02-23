import localFont from "next/font/local";
import "./globals.css";

const geistInter = localFont({
  src: "../../src/app/fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Projeto Petx",
  description: `Um sistema de gerenciamento interno para uma ONG de abrigo animal.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon-cat.svg" />
      </head>
      <body className={`${geistInter.variable} antialiased`}>{children}</body>
    </html>
  );
}
