# Write your MySQL query statement below

SELECT A1.machine_id, ROUND(SUM(A1.timestamp-A2.timestamp)/COUNT(A1.machine_id),3) AS processing_time
FROM Activity A1
INNER JOIN Activity A2 ON 
A1.machine_id = A2.machine_id AND 
A1.process_id = A2.process_id AND
A1.activity_type != A2.activity_type
WHERE A1.activity_type = 'end' AND A2.activity_type ='start'
GROUP BY A1.machine_id


