import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ka"> {/* Changed to Georgian language */}
      <Head>
        <title>Gamomiwere.Ge</title>
        <meta name="description" content="მოითხოვეთ სამომხმარებლო სესხი მარტივად და სწრაფად! მიიღეთ თანხა ონლაინ, მინიმალური დოკუმენტაციით და საუკეთესო პირობებით თქვენი ფინანსური საჭიროებებისთვის." />
        <meta property="og:title" content="სესხები | Gamomiwere.ge" />
        <meta property="og:description" content="მოითხოვეთ სამომხმარებლო სესხი მარტივად და სწრაფად!" />
        <link rel="canonical" href="https://gamomiwere.ge" />
      </Head>
      <div>
        {/* Main application content will be rendered here */}
        <Main />
        
        {/* Next.js script tags for hydration and other client-side functionality */}
        <NextScript />
      </div>
    </Html>
  );
}