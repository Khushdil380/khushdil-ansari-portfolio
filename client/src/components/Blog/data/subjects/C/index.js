// C subject - lazy loading for better performance
import { createLazyTopic } from "../contentParser";
import dataTypes from "./data-types";
import operators from "./operators";
import conditionalStatements from "./conditional-statements";
import functions from "./functions";
import pointers from "./pointers";
import strings from "./strings";
import structures from "./structures";
import unions from "./unions";
import fileHandling from "./file-handling";
import dynamicMemory from "./dynamic-memory";
import preprocessor from "./preprocessor";
import commandLineArgs from "./command-line-args";
import recursion from "./recursion";
import bitwiseOperators from "./bitwise-operators";

export default {
  id: "c",
  name: "C",
  topics: [
    createLazyTopic("intro-to-c", "Introduction to C", () =>
      import("./intro-to-c/intro-to-c.content")
    ),
    createLazyTopic("variables-in-c", "Variables in C", () =>
      import("./variables/variables-in-c.content")
    ),
    dataTypes,
    operators,
    conditionalStatements,
    createLazyTopic("loops-in-c", "Loops in C", () =>
      import("./loops/loops.content")
    ),
    functions,
    createLazyTopic("arrays", "Arrays", () =>
      import("./arrays/arrays.content")
    ),
    pointers,
    strings,
    structures,
    unions,
    fileHandling,
    dynamicMemory,
    preprocessor,
    commandLineArgs,
    recursion,
    bitwiseOperators,
  ],
};
