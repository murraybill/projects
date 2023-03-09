export default function ImageExample() {
  return (
    <div class="bg-white md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-8 py-8 text-sm ">
      
      <b>Current time: {new Date().toLocaleString()}</b>      
      <img src="/example_pic.jpeg" class="w-80" alt="" />
      
    </div>
  );
}
