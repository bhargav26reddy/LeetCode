# Write your MySQL query statement below

SELECT E.name, B.Bonus
FROM Employee E
LEFT JOIN Bonus B ON E.empId = B.empId
where B.bonus < 1000 or B.bonus IS NULL