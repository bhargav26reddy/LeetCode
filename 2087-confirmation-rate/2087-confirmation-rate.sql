# Write your MySQL query statement below

WITH CTE AS(SELECT A.user_id, A.time_stamp, B.action, CASE WHEN B.action='timeout' THEN 0  WHEN B.action='confirmed' THEN 1 ELSE 0 END AS value
FROM Signups A LEFT JOIN Confirmations B ON A.user_id = B.user_id)

SELECT user_id, ROUND(SUM(value)/COUNT(value), 2) AS confirmation_rate
FROM CTE
GROUP BY user_id
-- select * 
-- FROM CTE