const express = require('express')
const { request, response } = require('express');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const shoppingList = [
    {id:"1",productName:"Banana"},
    {id:"2",productName:"Apple"},
    {id:"3",productName:"Milk"},
    {id:"4",productName:"Pork"},
    {id:"5",productName:"Avocado"},
    {id:"6",productName:"Coffee"}
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



app.listen(3000)