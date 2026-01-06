// DBMS subject - lazy loading for better performance
import { createLazyTopic } from "../contentParser";
import sqlBasics from "./sql-basics";
import normalization from "./normalization";
import transactions from "./transactions";

const DBMS = {
  id: "dbms",
  name: "DBMS",
  topics: [
    createLazyTopic("intro-to-databases", "Introduction to Databases", () =>
      import("./intro-to-databases/intro-to-databases.content")
    ),
    sqlBasics,
    normalization,
    transactions,
  ],
};

export default DBMS;
