// tech Tutorial subject - topics with lazy loading for better performance
import { createLazyTopic } from "../contentParser";

const techTutorial = {
  id: "tech-tutorial",
  name: "tech Tutorial",
  topics: [
    createLazyTopic(
      "how-internet-works",
      "How the Internet Actually Works",
      () => import("./how-internet-works/how-internet-works.content")
    ),
    createLazyTopic("what-is-code-editor", "What is Code Editor", () =>
      import("./what-is-code-editor/what-is-code-editor.content")
    ),
    createLazyTopic(
      "why-beginners-struggle",
      "Why Most Beginners Struggle With Programming (And How to Fix It)",
      () => import("./why-beginners-struggle/why-beginners-struggle.content")
    ),
  ],
};

export default techTutorial;
