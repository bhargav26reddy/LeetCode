# Write your MySQL query statement below




select customer_id
from Customer
group by customer_id
having COUNT(DISTINCT(product_key)) = (select COUNT(*) as count
from Product)

