# Write your MySQL query statement below
-- SELECT name FROM 
-- Employee WHERE managerId = 

SELECT name FROM Employee
Where id IN (SELECT managerId
FROM Employee
GROUP BY managerId
HAVING COUNT(managerId) >= 5)