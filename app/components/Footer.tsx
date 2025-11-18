
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">🛍️ Mundo Shopee</h3>
          <p className="text-gray-400 mb-4">
            As melhores ofertas da Shopee, todo dia
          </p>
          
          <div className="border-t border-gray-700 pt-4 mt-4">
            <p className="text-sm text-gray-500">
              © {currentYear} Mundo Shopee. Site de afiliados independente.
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Os preços podem variar. Verifique sempre no site da Shopee antes de comprar.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
