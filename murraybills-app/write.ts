/**
 * write.ts
 * 
 * 
[
  {
    "search": "Bob"
  },
  {
    "search": "Hans"
  }
]
 */
export default function writeJson(path: string, data: object) {
  try {

    let json = {"searchString":data}
    let jsonAsString = JSON.stringify(json)+",";
    Deno.writeTextFileSync(path,jsonAsString, {
      append: true,
    });

    console.log("Written to " + path);
    console.log(JSON.stringify(data));
  } catch (e) {
    return e.message;
  }
}
