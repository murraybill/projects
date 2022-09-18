import { assert } from "https://deno.land/std@0.156.0/testing/asserts.ts";

Deno.test({
  name: "a test case",
  fn() {
    let someCondition = true;
    assert(someCondition);
  },
});

const url = Deno.args[0];
const res = await fetch(url);

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);