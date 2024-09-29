import React from "react";
import Table from "../components/AutoLoanRender";
import { Helmet } from "react-helmet";

const CarLoan = () => {
  return (
    <div>
      <Helmet>
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
      </Helmet>
      <Table />
    </div>
  );
};

export default CarLoan;
