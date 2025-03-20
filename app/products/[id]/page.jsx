import Image from "next/image";
import { ShoppingCart, Heart, Star, TruckIcon } from "lucide-react";
import { api } from "@/lib/api-client";

// Normalde bu veri API'den gelecek
const product = {
  id: "1",
  name: "Indigo Organik Pamuk Basic Tayt",
  description:
    "Gün boyu konfor ve şıklık sunan organik pamuktan üretilmiş temel taytlarımız, günlük kullanım için idealdir. Yüksek bel kesimi, nefes alabilen kumaşı ve dayanıklı yapısıyla favoriniz olacak.",
  price: 1575.0,
  images: ["/images/tayt1.jpg", "/images/tayt1-2.jpg", "/images/tayt1-3.jpg"],
  colors: ["İndigo", "Siyah", "Gri"],
  sizes: ["XS", "S", "M", "L", "XL"],
  features: [
    "Organik pamuk",
    "Yüksek bel kesim",
    "Nefes alabilen kumaş",
    "Dayanıklı dikiş",
    "Esnek yapı",
  ],
};

// Bu fonksiyon daha sonra API'ye bağlanacak
// export async function getProduct(id) {
//   return api.products.getById(id);
// }

export default function ProductDetailPage({ params }) {
  // const product = await getProduct(params.id);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Ürün Görselleri */}
        <div className="md:w-1/2">
          <div className="relative h-[500px] w-full mb-4">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {product.images.map((image, index) => (
              <div key={index} className="relative h-24 cursor-pointer">
                <Image
                  src={image}
                  alt={`${product.name} - ${index + 1}`}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Ürün Bilgileri */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= 4
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">(32 değerlendirme)</span>
          </div>

          <div className="text-2xl font-bold mb-6">
            ₺{product.price.toFixed(2)}
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Renk Seçimi */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Renk</h3>
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border ${
                    index === 0
                      ? "border-pink-600 text-pink-600"
                      : "border-gray-300"
                  } rounded-md`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Beden Seçimi */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Beden</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border ${
                    index === 1
                      ? "border-pink-600 text-pink-600"
                      : "border-gray-300"
                  } rounded-md`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Sepete Ekle */}
          <div className="flex gap-2 mb-6">
            <div className="flex border rounded-md">
              <button className="px-4 py-2 text-gray-600 hover:text-pink-600">
                -
              </button>
              <span className="px-4 py-2">1</span>
              <button className="px-4 py-2 text-gray-600 hover:text-pink-600">
                +
              </button>
            </div>
            <button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Sepete Ekle
            </button>
            <button className="p-2 border border-gray-300 rounded-md hover:border-pink-600 hover:text-pink-600">
              <Heart className="h-5 w-5" />
            </button>
          </div>

          {/* Kargo Bilgisi */}
          <div className="flex items-center text-green-600 mb-6">
            <TruckIcon className="h-5 w-5 mr-2" />
            <span>1500₺ üzeri kargo bedava</span>
          </div>

          {/* Ürün Özellikleri */}
          <div>
            <h3 className="text-lg font-medium mb-2">Ürün Özellikleri</h3>
            <ul className="list-disc pl-5 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
