SELECT customers.customer_id,  customers.first_name, customers.last_name, address.phone, customers.email, address.address, city.city, address.district, country.country
    FROM address
    JOIN customers
    ON customers.address_id = address.address_id 
    JOIN city
    ON address.city_id = city.city_id
    JOIN country
    ON city.country_id = country.country_id
    WHERE customer_id = 599
    GROUP BY customer_id;
   

select * from address;
select * from customers ;
select * from city ;
select * from country




