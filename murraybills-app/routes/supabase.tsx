import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Database } from "../supabase.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";


const supabase = createClient<Database>(
  "https://uxfmsfvbpwzbmstocagh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4Zm1zZnZicHd6Ym1zdG9jYWdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3MzkxNzMsImV4cCI6MTk5NDMxNTE3M30.6DXMVzkApzDc1IyEG1lqX1phyH7M3CDCw14-6dcB_Z4",
);

export async function getOrders() {
  return await supabase.from("Order").select("*");
}


export const handler: Handlers<any> = {

  async GET(req, ctx) {
    let printValue = "";
    const response = await getOrders();
    printValue = JSON.stringify(response.data);
    //console.log(printValue);
    return ctx.render({ printValue });
  },
};

export default function Page({ data }: PageProps<any>) {
  const { printValue } = data;
  return (
    <>
      <Header />

      <div class="bg-white flex flex-col md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-8 py-8 text-sm">
        <p>
          {printValue}
        </p>
      </div>
      <Footer />
    </>
  );
}
