// routes/about.tsx
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div class="p-4 mx-auto max-w-screen-md">       
        <p>This is the about page.</p>
      </div>

      <Footer />
    </>
  );
}
