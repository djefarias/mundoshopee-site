
"use client";

import Image from 'next/image';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    commission: number;
    commissionRate: number;
    rating: number;
    shopName: string;
    image: string;
    productLink: string;
    affiliateLink: string;
    shopId: number;
    itemId: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const renderStars = (rating?: number) => {
    if (!rating) return null;
    const stars = Math.round(rating);
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < stars ? "text-yellow-400" : "text-gray-300"}>
            ★
          </span>
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating.toFixed(1)})</span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="relative aspect-square bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {product.commissionRate && (
          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
            💰 {(product.commissionRate * 100).toFixed(0)}% comissão
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 min-h-[40px]">
          {product.name}
        </h3>
        
        <div className="text-xs text-gray-500 mb-2">
          🏪 {product.shopName}
        </div>
        
        {renderStars(product.rating)}
        
        <div className="mt-auto pt-3">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl font-bold text-[#EE4D2D]">
              {formatPrice(product.price)}
            </span>
          </div>
          
          <div className="text-xs text-green-600 font-medium mb-3">
            Ganhe {formatPrice(product.commission)} de comissão
          </div>
          
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#EE4D2D] hover:bg-[#D73211] text-white text-center font-semibold py-2.5 rounded-lg transition-colors duration-200"
          >
            Ver Oferta 🛒
          </a>
        </div>
      </div>
    </div>
  );
}
