# Write your MySQL query statement below

select person_name from
(select turn, person_id, person_name, weight, SUM(weight)OVER(ORDER BY turn ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS TotalWeight
from Queue
order by turn) as sub where TotalWeight<=1000
order by TotalWeight desc
Limit 1

