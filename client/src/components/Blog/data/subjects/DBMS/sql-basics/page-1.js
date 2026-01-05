const page1 = {
  page: 1,
  title: "SQL Basics",
  sections: [
    {
      type: "heading",
      content: "Introduction to SQL",
    },
    {
      type: "text",
      content:
        "SQL (Structured Query Language) is used to communicate with databases. It's the standard language for relational database management.",
    },
    {
      type: "heading",
      content: "Basic SELECT Statement",
    },
    {
      type: "code",
      language: "sql",
      content: `SELECT column1, column2
FROM table_name
WHERE condition;`,
    },
    {
      type: "list",
      items: [
        "SELECT - specifies columns to retrieve",
        "FROM - specifies the table",
        "WHERE - filters the results",
      ],
    },
  ],
};

export default page1;
