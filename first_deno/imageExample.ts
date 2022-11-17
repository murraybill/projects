import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

async function handleRequest(request: Request): Promise<Response> {
  const { pathname } = new URL(request.url);

  // This is how the server works:
  // 1. A request comes in for a specific asset.
  // 2. We read the asset from the file system.
  // 3. We send the asset back to the client.

  // Check if the request is for example_pic.jpeg.
  if (pathname.startsWith("/example_pic.jpeg")) {
    // Read the image file from the file system.
    const file = await Deno.readFile("./example_pic.jpeg");
    // Respond to the request with the example_pic.jpeg file.
    return new Response(file, {
      headers: {
        "content-type": "image/jpeg",
      },
    });
  }

  return new Response(
    `<html>
      <head>
      </head>
      <body>                
        <img src="example_pic.jpeg" alt="" width="500" height="600"> 
      </body>
    </html>`,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    },
  );
}

serve(handleRequest);