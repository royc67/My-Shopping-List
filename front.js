const input = document.getElementById("text")
const inputA = document.getElementById("amount");
const inputP = document.getElementById('price');
const addBtn = document.getElementById("addBtn");
const listTable = document.getElementById("body");

function makeRow(id, amount, price){
    let row = document.createElement("tr");
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = id
    cell2.innerHTML = "Amount: " + amount
    cell3.innerHTML = "Price: " + price +"$"

    const newObj = {
        "id": id,
        "amount": amount,
        "price": price
    }
    
    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = 'X';
    row.appendChild(deleteBtn);
    deleteBtn.onclick = function() {
        listTable.removeChild(row);
        deleteProducts();
    }

    
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    row.appendChild(editBtn);
    
    listTable.appendChild(row)
    
     
     return newObj;

}


// const newPost = makeRow(input.value, inputA.value, inputP.value)

async function postProducts() {
const newShit = makeRow(input.value, inputA.value, inputP.value);
const { data } = await axios.post(`http://localhost:3005/products`, newShit)
}

addBtn.onclick = function(){
    // makeRow(input.value, inputA.value, inputP.value);
    postProducts();
    
}

async function getProducts() {
    const { data } = await axios.get(`http://localhost:3005/products`)
    data.forEach(element => {
       makeRow(element.id, element.amount, element.price)

        
    });
}

getProducts();

async function deleteProducts() {
    const { data } = await axios.delete(`http://localhost:3005/products/:id` )
    
}