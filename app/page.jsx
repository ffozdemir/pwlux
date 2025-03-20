import Image from "next/image";
import Link from "next/link";
import ProductList from "@/components/product/ProductList";

// Bu kısım daha sonra API'den çekilecek
const featuredProducts = [
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
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[600px] w-full">
        <Image
          src="/images/hero.jpg"
          alt="Hero Image"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white p-4 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Yaşam İçin Tasarlandı
            </h1>
            <p className="text-xl mb-8">
              Konforlu ve şık taytlarımızla hareket özgürlüğünü keşfedin
            </p>
            <Link
              href="/products"
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-md text-lg transition-colors duration-300 inline-block"
              aria-label="Alışveriş sayfasına git"
            >
              Şimdi Alışveriş Yap
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Öne Çıkan Ürünler
          </h2>
          <ProductList products={featuredProducts} />
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-pink-600 text-3xl mb-4" aria-hidden="true">
                <span role="img" aria-label="Sürdürülebilir">
                  🌿
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Sürdürülebilir Malzemeler
              </h3>
              <p className="text-gray-600">
                Doğa dostu, etik kaynaklı kumaşlarla üretilen taytlarımız hem
                sizi hem de gezegeni düşünür
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-pink-600 text-3xl mb-4" aria-hidden="true">
                <span role="img" aria-label="Hareket">
                  💪
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hareket Özgürlüğü</h3>
              <p className="text-gray-600">
                Her türlü aktivite için tasarlanmış, rahat ve esnek taytlarla
                kısıtlanmadan hareket edin
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-pink-600 text-3xl mb-4" aria-hidden="true">
                <span role="img" aria-label="Türkiye">
                  🇹🇷
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Türkiye'de Üretilmiştir
              </h3>
              <p className="text-gray-600">
                Tüm ürünlerimiz Türkiye'de etik çalışma koşullarında titizlikle
                üretilmektedir
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
