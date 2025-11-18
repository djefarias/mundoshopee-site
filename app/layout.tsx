
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mundo Shopee - As melhores ofertas da Shopee",
  description: "Descubra ofertas selecionadas da Shopee com os melhores preços e descontos incríveis!",
  keywords: "shopee, ofertas, promoções, descontos, compras online",
  openGraph: {
    title: "Mundo Shopee - As melhores ofertas da Shopee",
    description: "Descubra ofertas selecionadas da Shopee com os melhores preços e descontos incríveis!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
