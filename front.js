const input = document.getElementById("text")
const inputA = document.getElementById("amount");
const inputP = document.getElementById('price');
const addBtn = document.getElementById("addBtn");
const listTable = document.getElementById("body");
const saveBtn = document.createElement("button");
saveBtn.innerText = "save"
let editInputA = document.createElement("input");
editInputA.type = "number";
let editInputP = document.createElement("input");
editInputP.type = "number";
const searchItem = document.getElementById("search")

function makeRow(id, amount, price){
    let row = document.createElement("tr");
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = id
    cell2.innerHTML = "Amount: " + amount
    cell3.innerHTML = "Price: " + price +"$"

    let newObj = {
        "id": id,
        "amount": amount,
        "price": price
    }
    
    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = 'X';
    row.appendChild(deleteBtn);
    deleteBtn.onclick = function() { 
        deleteProducts(id);
        listTable.removeChild(row);
    }
    

    
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    row.appendChild(editBtn);
    editBtn.onclick = function() {
        row.appendChild(editInputA);
        editInputA.value = amount;
        row.appendChild(editInputP);
        editInputP.value = price;
        row.appendChild(saveBtn);
        saveBtn.onclick = function() {
            editProducts(id);
            listTable.removeChild(row);

        }

    }
    
    listTable.appendChild(row)
    
     console.log(newObj)
     return newObj;
     

}




async function postProducts() {
const newShit = makeRow(input.value, inputA.value, inputP.value);
const { data } = await axios.post(`http://localhost:3005/products`, newShit)
}

addBtn.onclick = function(){
    if (input.value === ""){
        alert("Item is required...")

    } else {
   
    postProducts();
    }
    
}

async function getProducts() {
    const { data } = await axios.get(`http://localhost:3005/products`)
    data.forEach(element => {
       makeRow(element.id, element.amount, element.price)

        
    });
}

getProducts();

async function deleteProducts(d) {

    const { data } = await axios.delete(`http://localhost:3005/products/${d}`)
    
}

async function editProducts(ed) {
    const edited = makeRow(ed, editInputA.value, editInputP.value)
    const { data } = await axios.put(`http://localhost:3005/products/${ed}`, edited )
}

