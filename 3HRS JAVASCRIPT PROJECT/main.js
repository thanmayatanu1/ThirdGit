function addNewExpense(event)
{
    event.preventDefault();
    const sellingprice = event.target.expenseamount.value;
    const  productname = event.target.description.value;
    const category = event.target.category.value;
    

const obj = {
    sellingprice,
    productname,
    category,
}

axios.post("https://crudcrud.com/api/8b6db41441f54c918e8aa8ce8aaa185f/sellerData", obj)
.then((response) => {
    showUserOnScreen(response.data);

    console.log(response)
})
.catch((err) => {
    document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong </h4>"
    console.log(err)
})



localStorage.setItem(obj.productname, JSON.stringify(obj));
showUserOnScreen(obj);
}

function showUserOnScreen(obj)
{
    const parentElement = document.getElementById('listOfitems');
    const childElement = document.createElement('li');
    childElement.textContent = obj.sellingprice + '-' + obj.productname + '-' + obj.category ;

    const editButton = document.createElement('input')
    editButton.type = "button"
    editButton.value = 'Edit'

    editButton.onclick = () =>{
        localStorage.removeItem(obj.productname)
        parentElement.removeChild(childElement)
        document.getElementById('expenseamountInputTag').value = obj.sellingprice
        document.getElementById('descriptionInputTag').value = obj.productname
        document.getElementById('categoryInputTag').value = obj.category
    }
    

    const deleteButton = document.createElement('input')
    deleteButton.type = "button"
    deleteButton.value = 'Delete'

    deleteButton.onclick = () =>{
        localStorage.removeItem(obj.productname)
        parentElement.removeChild(childElement)

        

    }
    


    childElement.appendChild(deleteButton)
    childElement.appendChild(editButton)
    parentElement.appendChild(childElement)
    
}
