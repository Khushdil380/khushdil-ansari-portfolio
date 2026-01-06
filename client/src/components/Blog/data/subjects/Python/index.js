// Python subject - mixing lazy loading for converted topics and regular imports for others
import { createLazyTopic } from "../contentParser";
import dataTypes from "./data-types";
import controlFlow from "./control-flow";
import modules from "./modules";

const Python = {
  id: "python",
  name: "Python",
  topics: [
    createLazyTopic("intro-to-python", "Introduction to Python", () =>
      import("./intro-to-python/intro-to-python.content")
    ),
    createLazyTopic("python-functions", "Python Functions", () =>
      import("./functions/functions.content")
    ),
    dataTypes,
    controlFlow,
    modules,
  ],
};

export default Python;
