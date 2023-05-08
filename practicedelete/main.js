function saveToLocalStorage(event)
{
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phonenumber = event.target.phonenumber.value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phonenumber', phonenumber);

    const obj = {
        name,
        email,
        phonenumber
    }

    localStorage.setItem('userDetails', JSON.stringify(obj));
    showUserOnScreen(obj);

    function  showUserOnScreen(obj){
        const parentElement = document.getElementById('listOfitems');
        const childElement = document.createElement('li');
        childElement.textContent = obj.name + '-' + obj.email + '-' + obj.phonenumber;

        const deleteButton = document.createElement('input');
        deleteButton.type = "button"
        deleteButton.value = "Delete"

        deleteButton.onclick = () => {
            localStorage.removeItem(obj.email)
            parentElement.removeChild(childElement)
        }

        const editButton = document.createElement('input')
        editButton.type = "button"
        editButton.value = "Edit"

        editButton.onclick = () => {
            localStorage.removeItem(obj.email)
            parentElement.removeChild(childElement)

            document.getElementById('usernameInputTag').value = obj.name
            document.getElementById('emailInputTag').value = obj.email
            document.getElementById('phoneNumberInputTag').value = obj.phonenumber
        }





        childElement.appendChild(deleteButton)
        childElement.appendChild(editButton)
        parentElement.appendChild(childElement)
    }
   



 



}