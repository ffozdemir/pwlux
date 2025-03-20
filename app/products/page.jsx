import ProductList from "@/components/product/ProductList";
import { api } from "@/lib/api-client";

// Normalde bu data API'den çekilecek
const products = [
  {
    id: "1",
    name: "Indigo Organik Pamuk Basic Tayt",
    price: 1575.0,
    imageUrl: "/images/tayt1.jpg",
  },
  {
    id: "2",
    name: "Kahverengi Basic Viskoz Tayt",
    price: 1590.0,
    imageUrl: "/images/tayt2.jpg",
  },
  {
    id: "3",
    name: "Bal Biker Şort",
    price: 1155.0,
    discountPrice: 808.5,
    imageUrl: "/images/tayt3.jpg",
  },
  {
    id: "4",
    name: "Krema Mini Boxer Şort",
    price: 1075.0,
    imageUrl: "/images/tayt4.jpg",
  },
  {
    id: "5",
    name: "Kestane Organik Pamuk Hamile Taytı",
    price: 1725.0,
    imageUrl: "/images/tayt5.jpg",
  },
  {
    id: "6",
    name: "Sangria Organik Pamuk Hamile Taytı",
    price: 1725.0,
    imageUrl: "/images/tayt6.jpg",
  },
  {
    id: "7",
    name: "Siyah Organik Pamuk Hamile Taytı",
    price: 1725.0,
    imageUrl: "/images/tayt7.jpg",
  },
];

// Bu fonksiyon daha sonra API'ye bağlanacak
// export async function getProducts() {
//   return api.products.getAll();
// }

export default function ProductsPage() {
  // const products = await getProducts();

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Tüm Taytlar</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filtreler */}
        <div className="w-full md:w-1/4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Filtreler</h2>

            {/* Kategori Filtresi */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Kategoriler</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Günlük & Çok Amaçlı
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Yoga & Pilates
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Fitness Taytları
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Hamile Taytı
                </label>
              </div>
            </div>

            {/* Fiyat Filtresi */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Fiyat Aralığı</h3>
              <div className="flex items-center">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-1/2 p-2 border rounded-md"
                />
                <span className="mx-2">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-1/2 p-2 border rounded-md"
                />
              </div>
            </div>

            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-md transition">
              Filtreleri Uygula
            </button>
          </div>
        </div>

        {/* Ürün Listesi */}
        <div className="w-full md:w-3/4">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}
