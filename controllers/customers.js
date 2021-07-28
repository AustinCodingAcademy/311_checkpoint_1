const pool = require('../sql/connection.js');
const mysql = require('mysql'); 


function getDefaultRoute(req, res){
    console.log('in the default route')
    res.send('default route');
}

function getCustomers(req, res){
    console.log('inside the customers route/path');
    
    let sql = `SELECT * FROM customers`; 

    pool.query(sql, function(err, results){
        if(err){
            console.error({ 'message': 'Error occured: Cannot fetch list of customers ' + err });
            res.status(404).send('Customer data not found'); 
        }else{
            console.log('success');
            res.json(results); 
        }
    })
}

function getCustomersByStoreId(req, res){
    let storeId = req.params.storeId; 
    console.log('getting customers with store id', storeId);
    
    let sql = `SELECT * from customers WHERE store_id = ?`; 
    let paramReplacements = [storeId]; 
    sql = mysql.format(sql, paramReplacements);

    pool.query(sql, function(err, results){
        if(err){
            console.error('Internal Service Error', err);
            res.status(500).send('Error Occured');
        }else if(results.length === 0){
            res.status(404).send('There are no customers at this store or the store doesn\'t exist yet');
            console.log('empty array returned', err); 
        }else{
            res.json(results); 
            console.log('success!')
        }
    })
}

function getAllCustomerContactInfo(req, res){
    
    let sql = `SELECT customers.customer_id,  customers.first_name, customers.last_name, address.phone, customers.email, address.address, city.city, address.district, country.country
    FROM address
    JOIN customers
    ON customers.address_id = address.address_id 
    JOIN city
    ON address.city_id = city.city_id
    JOIN country
    ON city.country_id = country.country_id
    GROUP BY customer_id`

    pool.query(sql, function(err, results){
        if(err){
            console.error('Internal Service Error', err);
            res.status(500).send('Internal Server Error')
        }else if(results.length === 0){
            console.log('empty array was returned');
            res.status(404).send('No data found')
        }else{
            res.json(results);
            console.log('Success in fetching all customer contact info'); 
        }
    })
}

function getCustomerContactInfoByCustomerId(req, res){
    let customerId = req.params.customer_Id; 
    console.log('in the customer contact info path fetching customer Id', customerId); 
    

    let sql = `SELECT customers.customer_id,  customers.first_name, customers.last_name, address.phone, customers.email, address.address, city.city, address.district, country.country
    FROM address
    JOIN customers
    ON customers.address_id = address.address_id 
    JOIN city
    ON address.city_id = city.city_id
    JOIN country
    ON city.country_id = country.country_id
    WHERE customer_id = ?
    GROUP BY customer_id`

    let replacements = [customerId]; 
    sql = mysql.format(sql, replacements); 

    pool.query(sql, function(err, results){
        if(err){
            console.error('Internal Server Error', err);
            res.status(500).send('Internal Server Error Occured'); 
        }else if(results.length === 0){
            console.log('customer and corresponding contact info not found for customer id' + customerId); 
            res.status(404).send('Customer and corresponding contact info not found for customer id ' + customerId); 
        }else if(results.length > 1){
            console.log('400 Bad Request');
            res.status(400).send('More than 1 customer found with the same ID. Bad Request, refine search')
        }else{
            res.json(results)
        }
    })
}

function createCustomer(req, res){
    res.send('in the create customer route');
    console.log('success')
}

module.exports = { getCustomers, 
    getCustomersByStoreId, 
    getCustomerContactInfoByCustomerId, 
    getAllCustomerContactInfo, 
    getDefaultRoute,
    createCustomer
}