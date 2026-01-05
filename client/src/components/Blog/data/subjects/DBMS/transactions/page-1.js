const page1 = {
  page: 1,
  title: "Database Transactions",
  sections: [
    {
      type: "heading",
      content: "Understanding Transactions",
    },
    {
      type: "text",
      content:
        "A transaction is a sequence of operations performed as a single logical unit of work. It must follow ACID properties.",
    },
    {
      type: "heading",
      content: "ACID Properties",
    },
    {
      type: "list",
      items: [
        "Atomicity - All or nothing",
        "Consistency - Valid state transitions",
        "Isolation - Concurrent transactions don't interfere",
        "Durability - Changes persist after commit",
      ],
    },
    {
      type: "code",
      language: "sql",
      content: `BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;`,
    },
  ],
};

export default page1;
