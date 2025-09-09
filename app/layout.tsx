import "@/app/globals.css";
import { Inter } from "next/font/google";
import type React from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Mateo Nuñez",
  description:
    "Hola, soy Mateo Nuñez, actualmente estudiante de Sistemas. Podés ver mi experiencia y trabajo en este portafolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <meta
          name="google-site-verification"
          content="eF8UbK8ghA29zsWnzurWzjJgXzmLeucRd59QUDpdHTE"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
