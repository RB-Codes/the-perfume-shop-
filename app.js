'use strict'

// main array
var worldperfumes = [];

// constructor
function Perfume(pName, pQuan, pTotal){
    this.pName = pName
    this.pQuan = pQuan
    this.pTotal = pTotal * pQuan + '$';
    worldperfumes.push(this);
}

var informs = document.getElementById('formofperfume');

informs.addEventListener("submit", function(event){
    event.preventDefault();
    var funpname = event.target.perfumename.value;
    var funpquan = event.target.perfumeprice.value;
    var randomize = priceRandomPerfume(120, 270);
    new Perfume(funpname, funpquan, randomize);
    setlocal();
    clearT();
    renderAll();
})


// local data
function setlocal() {
    var localAr = JSON.stringify('worldperfumes');
    localStorage.setItem('striLocalAr', localAr);
}
function getlocal() {
    var gettingar = localStorage.getItem('striLocalAr')
    if (gettingar) {
        worldperfumes = JSON.parse(gettingar);
    }
}
// table summoning 
var perfumetab = document.getElementById('perfumetab')
// Render function
function renderAll() {
    for (var i = 0; i < worldperfumes.length; i++) {
        var aRow = document.createElement('tr');
        perfumetab.appendChild(aRow);
        var contentA = document.createElement('td');
        contentA.textContent = worldperfumes[i].pName;
        aRow.appendChild(contentA);
        var contentB = document.createElement('td');
        contentB.textContent = worldperfumes[i].pQuan;
        aRow.appendChild(contentB);
        var contentC = document.createElement('td');
        contentC.textContent = worldperfumes[i].pTotal;
        aRow.appendChild(contentC);
    }
}
// clearing
function clearT() {

 perfumetab.innerHTML =  
 `<tr>
     <th>Perfume Name</th>
     <th>Price</th>
     <th>Total</th>
     </tr>`
    
}
    // calling local
getlocal();
renderAll();

// random function
function priceRandomPerfume(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}