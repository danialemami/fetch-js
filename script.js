
// function showMyName(){

fetch('https://jsonplaceholder.typicode.com/users')
    
//    .then((response) => response.json())
// .then((json) => console.log(json));

        
//     }
//     showMyName();
.then(function (response) {
    return response.json();
}).then(function (json) {
    console.log(json);
    renderDataInTheTable(json);
})

function renderDataInTheTable(json) {
const mytable = document.getElementById("html-data-table");
json.forEach(user => {
    let newRow = document.createElement("tr");
    Object.values(user).forEach((value) => {
        let cell = document.createElement("td");
        cell.innerText = value;
        newRow.appendChild(cell);
    })
    mytable.appendChild(newRow);
});
}
