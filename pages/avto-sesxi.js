import React from "react";
import Table from "../components/AutoLoanRender";
import Head from "next/head";

const CarLoan = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>ავტო სესხი | Gamomiwere.ge</title>
        <meta property="og:title" content="ავტო სესხი | Gamomiwere.ge" />
        <meta
          property="og:description"
          content="მიიღეთ ავტო სესხი მარტივად და სწრაფად! მიიღეთ დაფინანსება თქვენი ავტომობილის შეძენისთვის ან რეфинანსირებისთვის საუკეთესო პირობებით და მოქნილი გრაფიკით."
        />
        <meta
          name="description"
          content="მიიღეთ ავტო სესხი მარტივად და სწრაფად! მიიღეთ დაფინანსება თქვენი ავტომობილის შეძენისთვის ან რეфинანსირებისთვის საუკეთესო პირობებით და მოქნილი გრაფიკით."
        />
        <link rel="canonical" href="https://gamomiwere.ge/avto-sesxi" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Table />
    </div>
  );
};

export default CarLoan;
