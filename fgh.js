function savetoLocalstorage(event) {
    event.preventDefault();
    
let userDetails = {
    My_Expense_Amount : document.getElementById('amount').value,
    Description: document.getElementById('des').value,
    category :document.getElementById('cat').value 
}

let userDetails_serialized=JSON.stringify(userDetails)  

localStorage.setItem(userDetails.My_Expense_Amount , userDetails_serialized)
showNewUseronScreen(userDetails)
}

function showNewUseronScreen(userDetails){
 const d=document.getElementById('ul');
 d.innerHTML += localStorage.getItem(userDetails.My_Expense_Amount);
  
d.innerHTML = d.innerHTML + li;
}
function deleteUser(amount) {
    let child = document.getElementById(amount)
    let parent=document.getElementById('ul')
    parent.removeChild(child)
    localStorage.removeItem(amount)
}

function editUser(amount,description,category) {
amount=document.getElementById('amount').value
description=document.getElementById('des').value
category=document.getElementById('cat').value

deleteUser(amount)

}
