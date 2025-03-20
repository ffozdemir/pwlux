"use client";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            Tayt Store
          </Link>

          {/* Masaüstü Navigasyon */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="hover:text-pink-600 transition">
              Taytlar
            </Link>
            <Link href="/about" className="hover:text-pink-600 transition">
              Hakkımızda
            </Link>
            <Link href="/contact" className="hover:text-pink-600 transition">
              İletişim
            </Link>
          </nav>

          {/* Kullanıcı Araçları */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="hover:text-pink-600 transition">
              <ShoppingCart />
            </Link>
            <Link href="/profile" className="hover:text-pink-600 transition">
              <User />
            </Link>

            {/* Mobil Menü Düğmesi */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobil Menü */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3">
            <Link
              href="/products"
              className="block py-2 hover:text-pink-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Taytlar
            </Link>
            <Link
              href="/about"
              className="block py-2 hover:text-pink-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link
              href="/contact"
              className="block py-2 hover:text-pink-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              İletişim
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
