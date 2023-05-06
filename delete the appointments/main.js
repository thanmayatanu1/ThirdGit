function saveToLocalStorage(event)
{
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    

const obj = {
    name,
    email,
}

axios.post("https://crudcrud.com/api/708ed296328c4dc3a36bd4e60fc8415c/appointmentData", obj)
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

window.addEventListener("DOMContentLoaded", () => {

    const data = axios.get("https://crudcrud.com/api/708ed296328c4dc3a36bd4e60fc8415c/appointmentData")
    .then((response) => {
        console.log(response);

        for(var i = 0; i< response.data.length;i++){
            showUserOnScreen(response.data[i])

        }
    })
    .catch((error) => {
        console.log(error)
    })
    console.log(data)
    //const localStorageObj = localStorage;
    //const localStoragekeys = Object.keys(localStorageObj)

    //for(var i = 0; i< localStoragekeys.length;i++){
        //const key = localstoragekeys[i]
        //const userDetailsString = localStorageObj[key];
        //const userDetailsObj = JSON.parse(userDetailsString);
        //showUserOnScreen(userDetailsObj)
    //}
})

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

    function deleteUser(userId){
        axios.delete("https://crudcrud.com/api/708ed296328c4dc3a36bd4e60fc8415c/appointmentData/${userId}")
        .then((response) => {
            removeUserFromScreen(userId)
        })
        .catch((err) =>
        {
            console.log(err)
        })

        //console.log(emailId);
        //localStorage.removeItem(emailId);
        //removeUserFromScreen(emailId);
    }

    function removeUserFromScreen(userId){
        const parentNode = document.getElementById("listofUsers");
        const childNodeToBeDeleted = document.getElementById(userId);
        if(childNodeToBeDeleted){
            parentNode.removeChild(childNodeToBeDeleted)
        }
    }
    


    childElement.appendChild(deleteButton)
    childElement.appendChild(editButton)
    parentElement.appendChild(childElement)
    
}
