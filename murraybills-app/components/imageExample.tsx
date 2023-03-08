
export default function ImageExample() {
    return (
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <h2>Current time: {new Date().toLocaleString()}</h2>
  
        
        <img src="/example_pic.jpeg"
          class="w-80"
          alt=""
        />
      
      </div>
    );
  }
  