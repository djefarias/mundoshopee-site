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
    videoLink?: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <a
      href={product.affiliateLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
    >
      {/* Imagem Quadrada */}
      <div className="relative aspect-square bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        
        {/* Ícone de Play se tiver vídeo */}
        {product.videoLink && (
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center">
            <span className="text-white text-xs">▶️</span>
          </div>
        )}
      </div>
      
      {/* Informações do Produto */}
      <div className="p-4">
        {/* Nome do Produto - Máximo 2 linhas */}
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 min-h-[40px]">
          {product.name}
        </h3>
        
        {/* Preço em Destaque */}
        <div className="mb-3">
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
        </div>
        
        {/* Botão Discreto */}
        <div className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
          Ver na Shopee →
        </div>
      </div>
    </a>
  );
}
