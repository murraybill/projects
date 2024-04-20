import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"
import ImageExample from "../components/imageExample.tsx"
import Counter from "../islands/Counter.tsx";
import AlertButton from "../islands/AlertButton.tsx";


export default function home() {
  return (
      <>
      <Header/>
      <div class="bg-white flex flex-col md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-8 py-8 text-sm bg-lime-300">
      <Counter start={1}/>
      <AlertButton/>     
      </div>      
      <ImageExample/>      
      <Footer/>      
      </>
  );
}


