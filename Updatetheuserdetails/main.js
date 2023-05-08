function saveToLocalStorage(event)
{
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phonenumber = event.target.phonenumber.value;

   // localStorage.setItem('name', name);
    //localStorage.setItem('email', email);
    //localStorage.setItem('phonenumber', phonenumber);

    const obj = {
        name,
        email,
        phonenumber
    }
    
    
    axios.post("https://crudcrud.com/api/0dd58c9b96f142a08ecced319cb944f8/appointmentData", obj)
        .then((response) => {
          showNewUserOnScreen(response.data);

    //console.log(response)
  
})
        .catch((err) => {
         document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong </h4>"
         console.log(err)
})

    //localStorage.setItem('userDetails', JSON.stringify(obj));
    //showNewUserOnScreen(obj);
}




    window.addEventListener("DOMContentLoaded", () => {

        const data = axios.get("https://crudcrud.com/api/0dd58c9b96f142a08ecced319cb944f8/appointmentData", obj)
        .then((response) => {
            //console.log(response);
    
            for(var i = 0; i< response.data.length;i++){
                showNewUserOnScreen(response.data[i])
    
            }
        })
        .catch((error) => {
            console.log(error)
        })
        
    })


    function showUserOnScreen(obj)
{
    const parentElement = document.getElementById('listOfItems');
    const childElement = document.createElement('li');
    childElement.textContent = obj.name + '-' + obj.email + '-' + obj.phonenumber + '-' + obj._id ;

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

    function deleteUser(obj){
        axios.delete("https://crudcrud.com/api/0dd58c9b96f142a08ecced319cb944f8/appointmentData/${obj.email}")
        .then((response) => {
            removeUserFromScreen(obj)
        })
        .catch((err) =>
        {
            console.log(err)
        })

        //console.log(emailId);
        //localStorage.removeItem(emailId);
        //removeUserFromScreen(emailId);
    }

    function removeUserFromScreen(obj){
        const parentNode = document.getElementById("listofItems");
        const childNodeToBeDeleted = document.getElementById(obj.email);
        if(childNodeToBeDeleted){
            parentNode.removeChild(childNodeToBeDeleted)
        }
    }
    


    childElement.appendChild(deleteButton)
    childElement.appendChild(editButton)
    parentElement.appendChild(childElement)
    
}

                              
    