import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainContent from "@/components/MainContent";

export default function Home() {
 return (
  <div>
   <Head>
    <title>BeautySkincare Online Store</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <script src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
   </Head>

   <Header />
   <MainContent />
   <Footer />
  </div>
 );
}
