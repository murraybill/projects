/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

function App() {
  return (
    <html>
      <head>
        <title>Hello from murraybill</title>
      </head>
      <body>
        <div>
        <h1>Hello Murraybill</h1>
        <h2>Current time: {new Date().toLocaleString()}</h2>       
        </div>
      </body>
    </html>
  );
}

function handler(req) {

  const html = renderSSR(<App />);
  return new Response(html, {
    headers: {
      "content-type": "text/html",
    },
  });
}

serve(handler);