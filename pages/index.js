// import Head from "next/head";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import MainContent from "@/components/MainContent";

// export default function Home() {
//  return (
//   <div>
//    <Head>
//     <title>BeautySkincare Online Store</title>
//     <link rel="preconnect" href="https://fonts.googleapis.com" />
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
//     <script src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
//    </Head>

//    <Header />
//    <MainContent />
//    <Footer />
//   </div>
//  );
// }

import Head from "next/head";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainContent from "@/components/MainContent";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/utils/api"; // Assuming api.js is in the utils folder
import Image from 'next/image';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data.products);
    };

    loadProducts();
  }, [page]);

  return (
    <div>
      <Head>
         {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <title>BeautySkincare Online Store</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        {/* <Script src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js" /> */}
      </Head>
      <Header />
      <MainContent products={products} />
      <div className="pagination">
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Previous</button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
      <Footer />
    </div>
  );
}
