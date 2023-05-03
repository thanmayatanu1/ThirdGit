function saveToLocalStorage(event)
{
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    

const obj = {
    name,
    email,
}

axios.post("https://crudcrud.com/api/1a84aee9403f4c719061ef98882c24ba/appointmentData", obj)
.then((response) => {
    showUserOnScreen(response.data);

    console.log(response)
})
.catch((err) => {
    document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong </h4>"
    console.log(err)
})



//localStorage.setItem(obj.email, JSON.stringify(obj));
//showUserOnScreen(obj);
}

function showUserOnScreen(obj)
{
    const parentElement = document.getElementById('listOfitems');
    const childElement = document.createElement('li');
    childElement.textContent = obj.name + '-' + obj.email ;

    const editButton = document.createElement('input')
    editButton.type = "button"
    editButton.value = 'Edit'

    editButton.onclick = () =>{
        localStorage.removeItem(obj.email)
        parentElement.removeChild(childElement)
        document.getElementById('usernameInputTag').value = obj.name
        document.getElementById('emailInputTag').value = obj.email
    }
    

    const deleteButton = document.createElement('input')
    deleteButton.type = "button"
    deleteButton.value = 'Delete'

    deleteButton.onclick = () =>{
        localStorage.removeItem(obj.email)
        parentElement.removeChild(childElement)

        

    }
    


    childElement.appendChild(deleteButton)
    childElement.appendChild(editButton)
    parentElement.appendChild(childElement)
    
}
