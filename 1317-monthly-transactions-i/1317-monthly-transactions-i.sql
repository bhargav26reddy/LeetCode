# Write your MySQL query statement below

SELECT SUBSTRING(trans_date, 1, 7) AS month,
       country,
       COUNT(*) AS trans_count,
       SUM(state='approved') as approved_count,
       SUM(amount) as trans_total_amount,
       SUM(CASE WHEN state='approved' THEN amount ELSE 0 END ) AS approved_total_amount
FROM Transactions
GROUP BY SUBSTRING(trans_date, 1, 7), country