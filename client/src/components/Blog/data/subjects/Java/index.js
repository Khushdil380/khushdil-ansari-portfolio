// Java subject - topics with lazy loading for better performance
import { createLazyTopic } from "../contentParser";

const Java = {
  id: "java",
  name: "Java",
  topics: [
    createLazyTopic("intro-to-java", "Introduction to Java", () =>
      import("./intro-to-java/intro-to-java.content")
    ),
    createLazyTopic("oop-concepts", "OOP Concepts", () =>
      import("./oop-concepts/oop-concepts.content")
    ),
    createLazyTopic("collections", "Collections", () =>
      import("./collections/collections.content")
    ),
    createLazyTopic("exceptions", "Exceptions", () =>
      import("./exceptions/exceptions.content")
    ),
  ],
};

export default Java;
