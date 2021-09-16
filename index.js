
let myLeads = []
const inputEl = document.getElementById("input-el")
const   inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")
console.log(ulEl)

const deleteBtn = document.getElementById("delete-btn")

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
  
     
})

deleteBtn.addEventListener("dblclick", function(){

    console.log("doble clicked")
    localStorage.clear()
    myLeads = []
    render()
})

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

     myLeads.push(inputEl.value)
    inputEl.value= ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})
function render(leads) {
let listItems=""
for (let i = 0; i < myLeads.length; i++) {

    listItems += `<li>
                    <a tagret='_blank' href='${myLeads[i]}'>${myLeads[i]} </a>`
}
    ulEl.innerHTML = listItems 
    console.log(listItems)
}

