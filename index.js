const express = require('express')
const { request, response } = require('express');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const shoppingList = [
    {id:"Banana",amount: 1, price: 50},
    {id:"air-pods",amount: 2, price: 100},
    {id:"neckless",amount: 3, price: 150},
    {id:"blade",amount: 4, price: 200}
    
]
app.get('/', (req,res)=>{
    res.send('Hello World!')
})

//a GET request to /products/ returns a list of products object from a static array
app.get('/products', (req, res) => {
    res.send(shoppingList);
})

//a GET request to /products/{id} returns the details of product 123 from the static array
app.get('/products/:id',(req, res) => {
    shoppingList.forEach((product) => {
        if (product.id == req.params.id)
            res.send(product);

    })
})

//a POST request to /products create new product object in the static array and return the new product object
app.post('/products', (req, res) => {
    shoppingList.push(req.body);
    res.send(req.body);
})

//a PUT request to /products/{id} get in the body params updated product object, update product object and return the updated product
app.put('/products/:id',(req, res) => {
    shoppingList.forEach((product, i) => {
        if (product.id == req.params.id){
            shoppingList[i]=req.body;
            res.send(shoppingList[i]);
        }
    })
})

//a DELETE request to /products/{id} delete a product from the static array
app.delete('/products/:id', (req, res) => {
    shoppingList.forEach((product, i) =>{
        if (product.id == req.params.id){
            shoppingList.splice(i,1);
            res.send(shoppingList)
        }
    })
})

app.listen(3005)