// routes/about.tsx
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div class="bg-white md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-8 py-8 text-sm ">       
        <p>This is the about page.</p>
      </div>

      <Footer />
    </>
  );
}
