// Example 1
document.getElementById("changeTextButton").addEventListener("click", function() {
    let para = document.getElementById("myParagraph");
    para.textContent = "Parahraph has been changed"        
});

// Example 2
document.getElementById("highlightFirstCityButton").addEventListener("click", function() {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");        
});

// Example 3
document.getElementById("changeOrder").addEventListener("click", function() {
    let order = document.getElementById("coffeeType");
    order.textContent = "Espresso"
    order.style.backgroundColor = "brown"
    order.style.padding = "5px"
    order.style.borderRadius = "10px"
});

// Example 4
document.getElementById("addNewItem").addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = "Coffee";

    document.getElementById("shoppingList").appendChild(newItem)
});

// Example 5
document.getElementById("removeLastTask").addEventListener("click", function() {
    let tasks = document.getElementById("taskList");
    
    // Removes all tasks
    // tasks.remove()

    // Removes only the last element
    tasks.lastElementChild.remove()
});

// Example 6
document.getElementById("clickMeButton").addEventListener("dblclick", function() {
    alert("You clicked me!");
});

// Example 7
document.getElementById("teaList").addEventListener("click", function(event) {
    // for id use "#selector"
    if(event.target && event.target.matches(".teaItem")) {
        alert("You selected: " + event.target.textContent)        
    }    
});

// Example 8
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent = `Feedback is ${feedback}`    
});

// Example 9
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("domStatus").textContent = "DOM fully loaded"
});

// Example 10
document.getElementById("toggleHighlight").addEventListener("click", function() {
    let descriptionText = document.getElementById("descriptionText");    
    descriptionText.classList.toggle("highlight");
});
