// Imports
import { assertStrictEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";
import { greet } from "../lib/greet.ts";

Deno.test("Send a greeting.", () => {
  const names = [
    "Deno",
  ];
  for (const name of names) {
    assertStrictEquals(greet(name), "Hello, " + name + "!");
  }
});
