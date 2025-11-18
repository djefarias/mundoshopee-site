"use client";

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

interface Product {
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
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch('https://mundoshopeestorage.blob.core.windows.net/offers/latest.json');
        
        if (!response.ok) {
          throw new Error('Falha ao carregar ofertas');
        }
        
        const data = await response.json();
        // Limitar a 20 produtos
        const limitedProducts = (data.products || []).slice(0, 20);
        setProducts(limitedProducts);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar ofertas. Tente novamente mais tarde.');
        console.error('Erro ao buscar produtos:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-gray-900"></div>
          <p className="mt-4 text-gray-600">Carregando ofertas...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center bg-gray-50 border border-gray-200 rounded-2xl p-8 max-w-md">
          <div className="text-gray-400 text-5xl mb-4">⚠️</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Oops!</h3>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-600 text-lg">Nenhuma oferta disponível no momento.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2">
      {products.map((product) => (
        <ProductCard key={`${product.shopId}-${product.itemId}`} product={product} />
      ))}
    </div>
  );
}
