import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"
import ImageExample from "../components/imageExample.tsx"
import Counter from "../islands/Counter.tsx";

export default function home() {
  return (
      <>
      <Header/>
      <div class="p-4 mx-auto max-w-screen-md">
      <Counter start={0}/>
      </div>
      <ImageExample/>      
      <Footer/>      
      </>
  );
}