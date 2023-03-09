export default function ImageExample() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <h2>Current time: {new Date().toLocaleString()}</h2>

      <img src="/example_pic.jpeg" class="w-80" alt="" />
    </div>
  );
}
