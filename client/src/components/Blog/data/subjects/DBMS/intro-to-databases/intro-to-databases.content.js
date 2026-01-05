export default `
# Introduction to Databases

A database is an organized collection of structured information or data, typically stored electronically in a computer system. A Database Management System (DBMS) is software that manages and organizes this data.

## What is a DBMS?

DBMS stands for Database Management System. It is a software system that enables users to:

- Store data in a structured format
- Retrieve data efficiently
- Update and manage data
- Ensure data security and integrity
- Control concurrent access by multiple users

## Types of Databases

- Relational Databases (SQL) - MySQL, PostgreSQL, Oracle
- NoSQL Databases - MongoDB, Cassandra, Redis
- Graph Databases - Neo4j
- Time-Series Databases - InfluxDB

> Note: Relational databases are the most commonly used type in business applications!

[PAGE_BREAK]

# Why Use a Database?

## Advantages of DBMS

- Data Independence - Separate data from applications
- Data Integrity - Ensure accuracy and consistency
- Data Security - Control access and permissions
- Concurrent Access - Multiple users can access simultaneously
- Backup and Recovery - Protect against data loss
- Reduced Data Redundancy - Minimize duplicate data

## Real-World Examples

Databases are used everywhere:

- Banking systems - Account information, transactions
- E-commerce - Products, orders, customers
- Social media - User profiles, posts, connections
- Healthcare - Patient records, appointments
- Education - Student information, grades, courses

[PAGE_BREAK]

# Database Concepts

## Tables

A table is the basic unit of data storage in a relational database. It consists of rows and columns.

Example: Students Table

\`\`\`
| StudentID | Name    | Age | Grade |
|-----------|---------|-----|-------|
| 1         | Alice   | 20  | A     |
| 2         | Bob     | 22  | B     |
| 3         | Charlie | 21  | A     |
\`\`\`

## Key Terms

- Row (Record/Tuple) - A single entry in a table
- Column (Field/Attribute) - A category of data
- Primary Key - Unique identifier for each row
- Foreign Key - Links tables together

> Tip: Every table should have a primary key to uniquely identify each record!

[PAGE_BREAK]

# SQL Basics

SQL (Structured Query Language) is the standard language for working with relational databases.

## Main SQL Commands

- SELECT - Retrieve data from tables
- INSERT - Add new data
- UPDATE - Modify existing data
- DELETE - Remove data
- CREATE - Create new tables or databases
- DROP - Delete tables or databases

## SELECT Statement

The most common SQL operation:

\`\`\`sql
-- Select all columns
SELECT * FROM students;

-- Select specific columns
SELECT name, age FROM students;

-- Filter results
SELECT name, grade 
FROM students 
WHERE age > 20;

-- Sort results
SELECT name, grade 
FROM students 
ORDER BY grade DESC;
\`\`\`

[PAGE_BREAK]

# Creating Tables

## CREATE TABLE Syntax

\`\`\`sql
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    email VARCHAR(100) UNIQUE,
    grade CHAR(1)
);
\`\`\`

## Data Types

Common SQL data types:

- INT - Integer numbers
- VARCHAR(n) - Variable-length strings (up to n characters)
- CHAR(n) - Fixed-length strings
- DATE - Date values (YYYY-MM-DD)
- DECIMAL(p,s) - Decimal numbers
- BOOLEAN - True/False values

## Constraints

- PRIMARY KEY - Unique identifier, cannot be NULL
- FOREIGN KEY - References another table
- NOT NULL - Must have a value
- UNIQUE - No duplicate values allowed
- DEFAULT - Default value if none specified

> Important: Choose appropriate data types and constraints to maintain data integrity!

[PAGE_BREAK]

# Inserting Data

## INSERT Statement

Add new records to a table:

\`\`\`sql
-- Insert single record
INSERT INTO students (student_id, name, age, grade)
VALUES (1, 'Alice', 20, 'A');

-- Insert multiple records
INSERT INTO students (student_id, name, age, grade)
VALUES 
    (2, 'Bob', 22, 'B'),
    (3, 'Charlie', 21, 'A'),
    (4, 'Diana', 23, 'B');

-- Insert with some columns (others use defaults or NULL)
INSERT INTO students (student_id, name)
VALUES (5, 'Eve');
\`\`\`

> Note: Make sure to provide values for all NOT NULL columns!

[PAGE_BREAK]

# Querying Data

## WHERE Clause

Filter records based on conditions:

\`\`\`sql
-- Single condition
SELECT * FROM students WHERE age = 21;

-- Multiple conditions (AND)
SELECT * FROM students 
WHERE age > 20 AND grade = 'A';

-- Multiple conditions (OR)
SELECT * FROM students 
WHERE grade = 'A' OR grade = 'B';

-- Pattern matching
SELECT * FROM students 
WHERE name LIKE 'A%';  -- Names starting with A

-- Range
SELECT * FROM students 
WHERE age BETWEEN 20 AND 22;
\`\`\`

## Aggregate Functions

Perform calculations on data:

\`\`\`sql
-- Count records
SELECT COUNT(*) FROM students;

-- Average age
SELECT AVG(age) FROM students;

-- Maximum and minimum
SELECT MAX(age), MIN(age) FROM students;

-- Sum of values
SELECT SUM(credits) FROM courses;

-- Group by
SELECT grade, COUNT(*) as student_count
FROM students
GROUP BY grade;
\`\`\`

[PAGE_BREAK]

# Updating and Deleting Data

## UPDATE Statement

Modify existing records:

\`\`\`sql
-- Update single record
UPDATE students
SET age = 21
WHERE student_id = 1;

-- Update multiple columns
UPDATE students
SET age = 22, grade = 'A'
WHERE student_id = 2;

-- Update multiple records
UPDATE students
SET grade = 'B'
WHERE age < 21;
\`\`\`

## DELETE Statement

Remove records from a table:

\`\`\`sql
-- Delete specific record
DELETE FROM students
WHERE student_id = 5;

-- Delete multiple records
DELETE FROM students
WHERE age < 18;

-- Delete all records (BE CAREFUL!)
DELETE FROM students;
\`\`\`

> Warning: Always use WHERE clause with UPDATE and DELETE to avoid modifying all records!

[PAGE_BREAK]

# Relationships Between Tables

## Foreign Keys

Link tables together to avoid data redundancy:

\`\`\`sql
-- Create courses table
CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100),
    instructor VARCHAR(100)
);

-- Create enrollments table with foreign keys
CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
\`\`\`

## Types of Relationships

- One-to-One - One record in table A relates to one record in table B
- One-to-Many - One record in table A relates to many records in table B
- Many-to-Many - Many records in table A relate to many records in table B

[PAGE_BREAK]

# JOIN Operations

## Combining Data from Multiple Tables

\`\`\`sql
-- INNER JOIN - Returns matching records from both tables
SELECT students.name, courses.course_name
FROM enrollments
INNER JOIN students ON enrollments.student_id = students.student_id
INNER JOIN courses ON enrollments.course_id = courses.course_id;

-- LEFT JOIN - Returns all records from left table
SELECT students.name, courses.course_name
FROM students
LEFT JOIN enrollments ON students.student_id = enrollments.student_id
LEFT JOIN courses ON enrollments.course_id = courses.course_id;

-- RIGHT JOIN - Returns all records from right table
SELECT students.name, courses.course_name
FROM enrollments
RIGHT JOIN courses ON enrollments.course_id = courses.course_id;
\`\`\`

> Tip: INNER JOIN is most commonly used when you want only matching records!

[PAGE_BREAK]

# Best Practices

## Database Design Principles

- Normalize your data to reduce redundancy
- Use appropriate data types for efficiency
- Create indexes on frequently queried columns
- Use meaningful names for tables and columns
- Document your database schema

## Query Optimization

- Use specific columns instead of SELECT *
- Add WHERE clauses to limit results
- Use indexes for large tables
- Avoid unnecessary JOINs
- Use EXPLAIN to analyze query performance

## Security

- Use prepared statements to prevent SQL injection
- Implement proper access controls
- Encrypt sensitive data
- Regular backups are essential
- Keep your DBMS software updated

> Important: Never store passwords in plain text - always use proper hashing!

[PAGE_BREAK]

# Common SQL Patterns

## Useful Query Examples

\`\`\`sql
-- Find duplicates
SELECT name, COUNT(*)
FROM students
GROUP BY name
HAVING COUNT(*) > 1;

-- Get top N records
SELECT * FROM students
ORDER BY grade DESC
LIMIT 5;

-- Subquery example
SELECT name
FROM students
WHERE student_id IN (
    SELECT student_id
    FROM enrollments
    WHERE course_id = 101
);

-- Calculate percentage
SELECT 
    grade,
    COUNT(*) * 100.0 / (SELECT COUNT(*) FROM students) as percentage
FROM students
GROUP BY grade;
\`\`\`

## Transaction Example

\`\`\`sql
-- Start transaction
BEGIN TRANSACTION;

-- Perform operations
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Commit if successful
COMMIT;

-- Or rollback if error
-- ROLLBACK;
\`\`\`

> Note: Transactions ensure data consistency - either all operations succeed or none do!
`;
