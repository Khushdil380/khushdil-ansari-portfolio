// C++ subject - lazy loading for better performance
import { createLazyTopic } from "../contentParser";

export default {
  id: "cpp",
  name: "C++",
  topics: [
    createLazyTopic("intro-to-cpp", "Introduction to C++", () =>
      import("./intro-to-cpp/intro-to-cpp.content")
    ),
    createLazyTopic("cpp-classes", "Classes and Objects", () =>
      import("./classes/classes.content")
    ),
    createLazyTopic("cpp-pointers", "Pointers in C++", () =>
      import("./pointers/pointers.content")
    ),
    createLazyTopic("cpp-templates", "Templates", () =>
      import("./templates/templates.content")
    ),
  ],
};
