

// function saveInput(){
//    // console.log('Button was clicked')
// }

// Create two variables:
//myLeads ->  should be assigned to an empty array
//inputEl -> Should be assigned to the text input filed
//let myLeads = ["weekend", "weekdays", "months"]
let myLeads = []
const inputEl = document.getElementById("input-el")
const   inputBtn = document.getElementById("input-btn")

//2.Grab the unordered list and store it in a const variable called ulEL

const ulEl = document.getElementById("ul-el")
console.log(ulEl)

//store the delete button in a deletebtn variable

const deleteBtn = document.getElementById("delete-btn")

//Grab the SAVE TAB button and store it in a tabBtn variable

const tabBtn = document.getElementById("tab-btn")


tabBtn.addEventListener("dblclick", function() {

    chrome.tabs.query({
        active: true, currentWindow: true}, 
        function (tabs) {
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads))
            render(myLeads)
 

        }

    )
    //console.log(tabs[0].url)
     
})

//Listenf or a double clikcs on the delete button 
deleteBtn.addEventListener("dblclick", function(){

    console.log("doble clicked")
    localStorage.clear()
    myLeads = []
    render()
})

//1.Save a key -value pair in localstorage
//localStorage.setItem("myLeads", "www.leadtracker.com")
//console.log(localStorage.getItem("myLeads"))

//to clear localstorage
//localStorage.clear()

//Get leads from the localstorage - PS: JSON.parse()
//Store it in variablle, leadsFromLocalStorage
//Log Out the variable


const  leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))

console.log(leadsFromLocalStorage)



if(leadsFromLocalStorage) 
{
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


const tabs = [ {
    url: "https://www.linkedin.com/in/brian-richard-34027854/"
}]
inputBtn.addEventListener("click", function() {
    //Push  the value from the inputEl into the myLeades array
    //instead of the hard-coded "www.awesomeleads.com" value
    //Google -> "get value from input field javascript
    

     myLeads.push(inputEl.value)
    //let inputValue = document.getElementById("input-el").value
    //console.log(inputValue)
    //2. Call the renderLeads() function
    inputEl.value= ""
    //save the myLeads array to localstorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    //myLeads = JSON.stringify(myLeads)
    render(myLeads)
// to verify that it works:

//console.log(localStorage.getItem("myLeads"))
//myLeads.push(inputValue)
   // console.log("Button clicked from addEventListener")
   //myLeads.push("www.awesomelaed.com")
   //console.log(myLeads)
   
})



//Log out the items in the my leads arrary suing a for loop

//render the leads in the unordered list using ulEl.textcontent

// 1. Create a variable, listItems, to hold all the HTML for the list items
//Assign it to an empty dtring to brgin with
//1. wrap the code below in a renderLeads() function
function render(leads) {
let listItems=""
for (let i = 0; i < myLeads.length; i++) {

    //2. Add the item to the listItems variable instead of the ulEl.innerHTML
   // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
  //  listItems +="<li><a taget='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    listItems += `<li>
                    <a tagret='_blank' href='${myLeads[i]}'>${myLeads[i]} </a>`
}
    ulEl.innerHTML = listItems 
    console.log(listItems)
}

//3. Render the listItems inside the unordered list using ulEl.innerHTML

   //ulEl.innerHTML = listItems

    //ulEl.textContent += myLeads[i] + " "
    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    //console.log(myLeads[i])

    //const li = document.createElement("li")
    //li.textContent = myLeads[i]
    //ulEl.append(li)
//}