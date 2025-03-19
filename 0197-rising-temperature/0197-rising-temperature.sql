# Write your MySQL query statement below

WITH CTE AS
(SELECT *, CASE WHEN LAG(temperature, 1) OVER(ORDER BY recordDate) IS NULL THEN temperature ELSE LAG(temperature, 1) OVER(ORDER BY recordDate) END AS temperaturenext, CASE WHEN LAG(recordDate, 1)OVER(ORDER BY recordDate) is NULL then recordDate ELSE LAG(recordDate, 1)OVER(ORDER BY recordDate) END AS recorddatenext
FROM Weather
 )

SELECT id
FROM CTE
where temperature > temperaturenext
AND DATEDIFF(recorddate, recorddatenext) = 1