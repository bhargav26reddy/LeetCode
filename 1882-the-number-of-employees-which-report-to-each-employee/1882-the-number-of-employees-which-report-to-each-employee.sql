# Write your MySQL query statement below

with cte as(
select E.reports_to as employee_id,count(distinct(E.employee_id)) as reports_count, ROUND(avg(E.age),0)as average_age
from Employees E
where reports_to IS NOT NULL
group by reports_to
)

select C.employee_id, E.name,  C.reports_count, C.average_age
from cte C
inner join Employees E ON C.employee_id = E.employee_id
order by C.employee_id asc