import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import { CartProvider } from "@/store/cart/CartContext";
import { UserProvider } from "@/store/user/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tayt Store - Rahat ve Şık Taytlar",
  description:
    "Tayt Store - Kaliteli ve şık taytlar için online alışveriş sitesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <UserProvider>
          <CartProvider>
            <MainLayout>{children}</MainLayout>
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
