import Head from 'next/head';
import { useRouter } from 'next/router'; // Import useRouter from Next.js
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/next"

function MyApp({ Component, pageProps }) {

    const router = useRouter(); // Use the router hook to get router object
  
    const noFooterRoutes = ['/contact'];

  return (
    <>
      <Head>
        {/* Google Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-H903Z618D7"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H903Z618D7');
          `,
          }}
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      {!noFooterRoutes.includes(router.pathname) && <Footer />}
      </>
  );
}

export default MyApp;