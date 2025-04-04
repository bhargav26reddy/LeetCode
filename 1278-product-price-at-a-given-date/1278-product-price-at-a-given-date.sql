# Write your MySQL query statement below
with cte as (
select DISTINCT(product_id) as product_id,FIRST_VALUE(new_price)over(partition by product_id order by change_date desc) as price
from Products
where change_date <= '2019-08-16'
)


select b.product_id, CASE WHEN a.price iS NULL THEN 10 else a.price END as price
from cte a
right join (select DISTINCT(product_id) from Products) b
ON b.product_id = a.product_id

