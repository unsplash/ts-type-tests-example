import { add } from "../src/main";

add(1, 'oo') // $ExpectError
const result = add(1, 2) // $ExpectType number