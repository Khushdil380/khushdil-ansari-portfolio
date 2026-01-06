// JavaScript subject - topics with lazy loading for better performance
import { createLazyTopic } from "../contentParser";

const JavaScript = {
  id: "javascript",
  name: "JavaScript",
  topics: [
    createLazyTopic("intro-to-js", "Introduction to JavaScript", () =>
      import("./intro-to-js/intro-to-js.content")
    ),
    createLazyTopic("arrays", "Arrays", () =>
      import("./arrays/arrays.content")
    ),
    createLazyTopic("functions", "Functions", () =>
      import("./functions/functions.content")
    ),
    createLazyTopic("async-programming", "Async Programming", () =>
      import("./async-programming/async-programming.content")
    ),
  ],
};

export default JavaScript;
