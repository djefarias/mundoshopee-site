# 🛍️ Mundo Shopee

Site de afiliados da Shopee mostrando as melhores ofertas e promoções diárias!

## 📋 Sobre o Projeto

**Mundo Shopee** é um site moderno e responsivo que exibe as melhores ofertas da Shopee, atualizadas automaticamente 3 vezes ao dia. O site consome dados de uma API hospedada no Azure Blob Storage e exibe produtos com informações detalhadas de preço, desconto, avaliações e links de afiliados.

## ✨ Funcionalidades

- ✅ **Grid Responsivo de Produtos**: Layout adaptável para mobile, tablet e desktop
- ✅ **Atualização Automática**: Ofertas atualizadas 3x por dia via Azure Functions
- ✅ **Otimização de Imagens**: Uso do Next.js Image para carregamento rápido
- ✅ **Estados de Loading e Erro**: Feedback visual durante carregamento e em caso de erros
- ✅ **Design Moderno**: Interface limpa com as cores vibrantes da Shopee
- ✅ **SEO Otimizado**: Meta tags configuradas para melhor indexação

## 🎨 Design

- **Cor Principal**: Laranja Shopee (`#EE4D2D`)
- **Layout**: Mobile-first, responsivo
- **Tipografia**: Inter (Google Fonts)
- **Componentes**: Cards de produtos com badges de desconto e comissão

## 🛠️ Tecnologias

- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Estilização utilitária
- **[Azure Blob Storage](https://azure.microsoft.com/)** - Hospedagem de dados e imagens

## 🚀 Como Rodar Localmente

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/djefarias/mundoshopee-site.git

# Entre no diretório
cd mundoshopee-site

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📦 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm start        # Inicia servidor de produção
npm run lint     # Executa o linter
```

## 🌐 Deploy na Vercel

A maneira mais fácil de fazer deploy é usando a [Vercel](https://vercel.com):

### Deploy Automático via GitHub

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Selecione o repositório `mundoshopee-site`
5. Clique em "Deploy"

✨ Pronto! A Vercel vai automaticamente:
- Instalar as dependências
- Fazer o build do projeto
- Fazer deploy em uma URL pública
- Configurar deploys automáticos a cada push

### Deploy via CLI

```bash
# Instale a CLI da Vercel
npm i -g vercel

# Faça deploy
vercel
```

### Variáveis de Ambiente

Não são necessárias variáveis de ambiente para este projeto, pois a API é pública.

## 📊 Estrutura da API

O site consome o JSON de ofertas de:
```
https://mundoshopeestorage.blob.core.windows.net/offers/latest.json
```

### Estrutura do JSON

```json
[
  {
    "itemid": 123456789,
    "shopid": 987654321,
    "title": "Nome do Produto",
    "image": "https://cdn.confect.io/uploads/media/product%20brand_blog_header%20(4).png",
    "price": 9990000,
    "original_price": 19990000,
    "discount": "50%",
    "rating": 4.8,
    "sold": 1500,
    "commission_rate": "12%",
    "affiliate_link": "https://..."
  }
]
```

**Nota**: Os preços vêm multiplicados por 100.000 (ex: R$ 99,90 = 9990000)

## 📁 Estrutura do Projeto

```
mundoshopee-site/
├── app/
│   ├── components/
│   │   ├── Header.tsx       # Cabeçalho com logo
│   │   ├── ProductGrid.tsx  # Grid de produtos + fetch de dados
│   │   ├── ProductCard.tsx  # Card individual de produto
│   │   └── Footer.tsx       # Rodapé
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout raiz com SEO
│   └── page.tsx             # Página inicial
├── public/                  # Arquivos estáticos
├── next.config.ts           # Configuração do Next.js
├── tailwind.config.ts       # Configuração do Tailwind
└── package.json             # Dependências
```

## 🔧 Infraestrutura Azure

### Storage Account
- **Nome**: mundoshopeestorage
- **Containers**:
  - `offers/` - JSON de ofertas
  - `images/` - Imagens de produtos
  - `videos/` - Vídeos promocionais

### Azure Functions
- **Frequência**: 3x por dia
- **Função**: Buscar ofertas da API da Shopee e atualizar `latest.json`

## 🎯 Roadmap

- [ ] Adicionar filtros por categoria
- [ ] Implementar busca de produtos
- [ ] Adicionar paginação
- [ ] Sistema de favoritos (localStorage)
- [ ] Newsletter para ofertas
- [ ] Página "Sobre"
- [ ] Blog de dicas de compras

## 📝 Licença

Este é um projeto de afiliados independente, não afiliado oficialmente à Shopee.

## 👤 Autor

**djefarias**
- GitHub: [@djefarias](https://github.com/djefarias)

---

**Feito com ❤️ e Next.js**
