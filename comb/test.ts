import { assertEquals } from "https://deno.land/std@0.128.0/testing/asserts.ts";
import { combSort } from "./index.ts";

Deno.test("comb sort", () => {
  const nums = [1, 9, 3, 5, 0];
  const sortedNums = combSort(nums);
  assertEquals(sortedNums, [0, 1, 3, 5, 9]);
});
