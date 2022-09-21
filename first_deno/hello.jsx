/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";
import {getIPAdr } from "./client_server.ts";

function App() {
  return (
    <html>
      <head>
        <title>Hello from murraybill</title>
      </head>
      <body>
        <h1>Hello Murraybill</h1>
      </body>
    </html>
  );
}

function handler(req) {
  const html = renderSSR(<App />);
  const ip = getIPAdr();
  return new Response(ip, html, {
    headers: {
      "content-type": "text/html",
    },
  });
}

serve(handler);
