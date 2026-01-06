// tech Tutorial subject - topics with lazy loading for better performance
import { createLazyTopic } from "../contentParser";

const techTutorial = {
  id: "tech-tutorial",
  name: "tech Tutorial",
  topics: [
    createLazyTopic("what-is-code-editor", "What is Code Editor", () =>
      import("./what-is-code-editor/what-is-code-editor.content")
    ),
  ],
};

export default techTutorial;
