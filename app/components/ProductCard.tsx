"use client";

import Image from 'next/image';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    original_price?: number;
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

  // Calcular desconto
  const calculateDiscount = () => {
    if (product.original_price && product.original_price > product.price) {
      const discount = ((product.original_price - product.price) / product.original_price) * 100;
      return Math.round(discount);
    }
    return null;
  };

  const discount = calculateDiscount();

  return (
    <a
      href={product.affiliateLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-100"
    >
      {/* Container da Imagem com Badges */}
      <div className="relative aspect-square bg-gray-50">
        {/* Badge "Oficial" - Canto Superior Esquerdo */}
        <div className="absolute top-0 left-0 bg-shopee-red text-white text-[10px] font-bold px-2 py-0.5 rounded-br-lg z-10">
          Oficial
        </div>
        
        {/* Badge de Desconto - Canto Superior Direito */}
        {discount && (
          <div className="absolute top-0 right-0 bg-shopee-yellow text-shopee-red text-xs font-bold px-2 py-1 rounded-bl-lg z-10 shadow-md">
            -{discount}%
          </div>
        )}
        
        {/* Imagem do Produto */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
        />
        
        {/* Ícone Verde - Canto Inferior Esquerdo */}
        <div className="absolute bottom-2 left-2 bg-shopee-green rounded-full w-5 h-5 flex items-center justify-center z-10 shadow-lg">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          </svg>
        </div>
      </div>
      
      {/* Informações do Produto - COMPACTO */}
      <div className="p-2">
        {/* Nome do Produto - Máximo 2 linhas, MENOR */}
        <h3 className="text-xs text-gray-700 line-clamp-2 mb-1 min-h-[32px] leading-tight">
          {product.name}
        </h3>
        
        {/* Preços */}
        <div className="mb-1">
          {/* Preço Original Riscado */}
          {product.original_price && product.original_price > product.price && (
            <div className="text-[10px] text-gray-400 line-through">
              {formatPrice(product.original_price)}
            </div>
          )}
          
          {/* Preço Atual - GRANDE E VERMELHO */}
          <div className="text-shopee-red text-base font-bold">
            {formatPrice(product.price)}
          </div>
        </div>
      </div>
    </a>
  );
}
