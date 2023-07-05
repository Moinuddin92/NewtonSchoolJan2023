// javascript code goes here
document.body.onload = addElement;
function addElement(){
    var itemsData = document.querySelectorAll('[data-ns-test="price"]');
    let itemPrice = 0;
    for(let i=0;i<itemsData.length;i++){
        itemPrice += parseFloat(itemsData[i].innerHTML);
    }
    
    var tbody = document.getElementsByTagName("tbody")[0];
    
    var newRow = tbody.insertRow(-1);
    var newData1 = newRow.insertCell(0);
    newData1.setAttribute("data-ns-test","grandTotal");
    newData1.textContent = itemPrice;
}