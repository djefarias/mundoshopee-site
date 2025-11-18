
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow w-full mx-auto px-4 py-8 max-w-screen-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            As melhores ofertas da Shopee, todo dia
          </h1>
          <p className="text-gray-600 text-lg">
            Descubra produtos incríveis com descontos imperdíveis!
          </p>
        </div>
        <ProductGrid />
      </div>
      <Footer />
    </main>
  );
}
