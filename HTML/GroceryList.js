function calcTotal() {
    var itemsData = document.querySelectorAll('[data-ns-test="price"]');
    let itemsPrice = 0;
    var grandTotalRow = document.querySelector('[data-ns-test="grandTotal"]');
    
    for(let i=0;i<itemsData.length;i++){
        itemsPrice += parseFloat(itemsData[i].innerHTML);
    }
    if(grandTotalRow){
        grandTotalRow.parentNode.remove();
    }
    var tbodyTag = document.getElementsByTagName("tbody")[0];
    var row = tbodyTag.insertRow(-1);
    var newGText = row.insertCell(0);
    var newPText = row.insertCell(1);
    var cText = document.createTextNode("Grand Total");
    newGText.appendChild(cText);
    newPText.setAttribute("data-ns-test","grandTotal");
    newPText.textContent = itemsPrice;
}