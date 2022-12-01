function savetoLocalstorage(event) {
    event.preventDefault();
    
let userDetails = {
    My_Expense_Amount : document.getElementById('amount').value,
    Description: document.getElementById('des').value,
    category :document.getElementById('cat').value 
}

let userDetails_serialized=JSON.stringify(userDetails)   // -----------

localStorage.setItem(userDetails.My_Expense_Amount,userDetails_serialized )

showNewUseronScreen(userDetails)
}

function showNewUseronScreen(userDetails){
 const d=document.getElementById('ul')
 let li= `<li id="${userDetails. My_Expense_Amount}"> '${userDetails.My_Expense_Amount}','${userDetails.Description}','${userDetails.category}'
  <button onclick = editUser('${ userDetails.My_Expense_Amount}','${userDetails.Description}','${userDetails.category}')> Edit </button> 
  <button onclick = deleteUser('${userDetails.My_Expense_Amount}')> Delete </button> 
   </li>`
d.innerHTML=d.innerHTML + li
}
function deleteUser(amount) {
    let child = document.getElementById(amount)
    let parent=document.getElementById('ul')
    parent.removeChild(child)
    localStorage.removeItem(amount)
}

function editUser(amount,description,category) {
document.getElementById('amount').value=amount
document.getElementById('des').value=description
document.getElementById('cat').value=category

deleteUser(amount)

}
