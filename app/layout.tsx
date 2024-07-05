import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haro Portfolio",
  description: "Portafolio de Haro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <ThemeProvider attribute="class"
            defaultTheme="Dark"
            enableSystem
            disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
