"use client";

import { useEffect, useState, useRef } from 'react';
import ProductCard from './ProductCard';

interface Product {
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
}

const PRODUCTS_PER_PAGE = 20;

export default function ProductGrid() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch('https://mundoshopeestorage.blob.core.windows.net/offers/latest.json');
        
        if (!response.ok) {
          throw new Error('Falha ao carregar ofertas');
        }
        
        const data = await response.json();
        setAllProducts(data.products || []);
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

  // Calcular produtos da página atual
  const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = allProducts.slice(startIndex, endIndex);

  // Função para mudar de página
  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll para o topo do grid
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

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

  if (allProducts.length === 0) {
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
    <div ref={gridRef}>
      {/* Grid de Produtos - 5 colunas no desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 min-[968px]:grid-cols-5 gap-2 max-w-7xl mx-auto">
        {currentProducts.map((product) => (
          <ProductCard key={`${product.shopId}-${product.itemId}`} product={product} />
        ))}
      </div>

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          {/* Botão Anterior */}
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              currentPage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            ← Anterior
          </button>

          {/* Indicador de Página */}
          <div className="text-sm text-gray-600">
            Página <span className="font-bold text-gray-900">{currentPage}</span> de <span className="font-bold text-gray-900">{totalPages}</span>
          </div>

          {/* Botão Próxima */}
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              currentPage === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            Próxima →
          </button>
        </div>
      )}
    </div>
  );
}
