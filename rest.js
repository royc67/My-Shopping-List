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

app.listen(3000)