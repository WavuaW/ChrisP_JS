import { capitalizingString } from "./Export";

// import * as capitalizeStrings from "./capitalize_strings";

const cap = capitalizingString("hello");

console.log(cap);

// Fallback export

import subtract from "math_functions"

export default function subtract(x,y) {return x- y;}
