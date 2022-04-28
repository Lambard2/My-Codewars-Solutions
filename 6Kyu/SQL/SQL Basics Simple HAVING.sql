/* https://www.codewars.com/kata/58164ddf890632ce00000220 */
SELECT COUNT(id) AS total_people, age FROM people GROUP BY age HAVING COUNT(id)>=10;