var ulTag = document.getElementById("Cities");
console.log(ulTag);
for(let i=1;i<=4;i++){
    let liTag1 = document.createElement("li");
    switch(i){
        case 1:
            liTag1.innerText="Delhi";
            break;
        case 2:
            liTag1.innerText="Chennai";
            break;
        case 3:
            liTag1.innerText="Bangalore";
            break;
        case 4:
            liTag1.innerText="Mumbai";
            break;
    }
    ulTag.appendChild(liTag1);
}
