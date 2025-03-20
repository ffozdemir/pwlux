import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  id,
  name,
  price,
  imageUrl,
  discountPrice,
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/products/${id}`}>
        <div className="relative h-64 w-full">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">{name}</h3>
          <div className="flex items-center">
            {discountPrice ? (
              <>
                <span className="text-gray-400 line-through mr-2">
                  ₺{price.toFixed(2)}
                </span>
                <span className="font-bold text-pink-600">
                  ₺{discountPrice.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="font-bold">₺{price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-md transition">
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}
