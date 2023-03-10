// routes/search.tsx
import Header from "../components/Header.tsx";
import IconSearch from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/search.tsx";
import Footer from "../components/Footer.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import writeJson from '../write.ts';

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.includes(query));

    if(query.length >0)
      writeJson("searchString.json",query);
    return ctx.render({ results, query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <>
      <Header />

      <div class="bg-white flex flex-col md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-8 py-8 text-sm">
        <form>
          <input
            class="bg-indigo-100 border-2"
            type="text"
            name="q"
            disabled            
            value={query}
          />
          <p class="pt-6">
            <button
              type="submit"
              class="px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 flex gap-2"
            >
              <IconSearch class="w-6 h-6" />Search
            </button>
          </p>
        </form>
        <ul>
          {results.map((name) => <li key={name}>{name}</li>)}
        </ul>
      </div>
      <Footer />
    </>
  );
}
