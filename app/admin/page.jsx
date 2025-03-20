import Link from "next/link";
import { Boxes, ShoppingBag, Users, BarChart2 } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Admin Paneli</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Toplam Ürün</p>
              <h3 className="text-2xl font-bold">120</h3>
            </div>
            <Boxes className="h-12 w-12 text-pink-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Toplam Sipariş</p>
              <h3 className="text-2xl font-bold">35</h3>
            </div>
            <ShoppingBag className="h-12 w-12 text-pink-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Toplam Kullanıcı</p>
              <h3 className="text-2xl font-bold">250</h3>
            </div>
            <Users className="h-12 w-12 text-pink-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Toplam Gelir</p>
              <h3 className="text-2xl font-bold">₺45,750</h3>
            </div>
            <BarChart2 className="h-12 w-12 text-pink-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Son Siparişler</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-2 px-4 text-left">Sipariş No</th>
                    <th className="py-2 px-4 text-left">Müşteri</th>
                    <th className="py-2 px-4 text-left">Durum</th>
                    <th className="py-2 px-4 text-left">Tutar</th>
                    <th className="py-2 px-4 text-left">Tarih</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-2 px-4">#12345</td>
                    <td className="py-2 px-4">Ahmet Yılmaz</td>
                    <td className="py-2 px-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        Tamamlandı
                      </span>
                    </td>
                    <td className="py-2 px-4">₺1,575.00</td>
                    <td className="py-2 px-4">19.03.2025</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4">#12344</td>
                    <td className="py-2 px-4">Ayşe Kaya</td>
                    <td className="py-2 px-4">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                        İşleniyor
                      </span>
                    </td>
                    <td className="py-2 px-4">₺2,665.00</td>
                    <td className="py-2 px-4">18.03.2025</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4">#12343</td>
                    <td className="py-2 px-4">Mehmet Demir</td>
                    <td className="py-2 px-4">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        Kargoda
                      </span>
                    </td>
                    <td className="py-2 px-4">₺3,315.00</td>
                    <td className="py-2 px-4">17.03.2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Hızlı İşlemler</h2>
            <div className="space-y-2">
              <Link
                href="/admin/products/new"
                className="block bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-md text-center transition"
              >
                Yeni Ürün Ekle
              </Link>
              <Link
                href="/admin/categories/new"
                className="block bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-md text-center transition"
              >
                Yeni Kategori Ekle
              </Link>
              <Link
                href="/admin/products"
                className="block bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md text-center transition"
              >
                Ürünleri Yönet
              </Link>
              <Link
                href="/admin/orders"
                className="block bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md text-center transition"
              >
                Siparişleri Yönet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
