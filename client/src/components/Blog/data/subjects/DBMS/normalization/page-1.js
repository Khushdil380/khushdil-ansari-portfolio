const page1 = {
  page: 1,
  title: "Database Normalization",
  sections: [
    {
      type: "heading",
      content: "What is Normalization?",
    },
    {
      type: "text",
      content:
        "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.",
    },
    {
      type: "heading",
      content: "Normal Forms",
    },
    {
      type: "list",
      items: [
        "1NF - First Normal Form: Eliminate duplicate columns",
        "2NF - Second Normal Form: Remove partial dependencies",
        "3NF - Third Normal Form: Remove transitive dependencies",
      ],
    },
  ],
};

export default page1;
