import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar />
      <Component {...pageProps} />
      <Footer /> */}
      <div className="min-h-screen">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
