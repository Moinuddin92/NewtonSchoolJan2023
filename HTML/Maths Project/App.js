let historyCont = document.querySelector('.historycon');
let resultCon = document.querySelector(".resultCon") 
function SavedButton(){
    console.log("working save btn")
    var wet =  document.querySelector(".inputBox1").innerHTML;
    var set =  document.querySelector(".inputBox2").innerHTML;

    localStorage.setItem(wet,set);
    console.log(localStorage.getItem(set));
    set++;
}

var hcount = 0 
function historyButton(){

    console.log("working history btn")
    hcount++;
    if(hcount%2==1){
        historyCont.style.display = "block";
        var data = historyCont;

        for (p in localStorage) {
            var ans = localStorage.getItem(p);
            if (ans != null) {
                // console.log(ans);
                // var h3 = document.createElement("h3");
                // h3.setAttribute('class', 'remove')

                // h3.innerHTML = `${p} => Result = ${ans}`;
                // console.log(h3);
                // data.appendChild(h3);
                let divCont = document.createElement("div");
                divCont.classList.add("container-input");
                let divProbStat = document.createElement("div");
                divProbStat.classList.add("inputBox1");
                divProbStat.innerHTML = p;
                let divSolution = document.createElement("div");
                divSolution.classList.add("inputBox2");
                divSolution.innerHTML = ans;
                let delButton = document.createElement("button");
                delButton.type = "reset";
                delButton.id = "deleteBtn";
                delButton.onclick = delBtn();
                let iDelBtn = document.createElement("i");
                iDelBtn.classList.add("fa-solid","fa-trash-can","fa-3x");
                delButton.appendChild(iDelBtn);
                divCont.appendChild(divProbStat);
                divCont.appendChild(divSolution);
                divCont.appendChild(delButton);
                data.appendChild(divCont);
            }
        }
    }else{
        historyCont.style.display = "none";
        var rem = document.querySelectorAll('.remove');
        console.log(rem);
        for (var i = 0; i < rem.length; i++) {
            rem[i].remove();
        }
    }
}

function SearchButton(){
    event.preventDefault();

    console.log("working search btn")
   var problem = document.getElementById('problemBar').value;
   var category = document.getElementById('categoryBar').value;
   let encodedUrl = encodeURIComponent(problem)
   let pro = fetch(`https://newton.vercel.app/api/v2/${category}/${encodedUrl}`)
   console.log(pro)
   pro.then((reponse) => {
    console.log(reponse.status)
    console.log(reponse.ok)
    return reponse.json()
   }).then((value) => {
    console.log(value);
    var resultFetched =  value.result;
    resultCon.style.display = "block";
    let divCont = document.createElement("div");
                divCont.classList.add("container-input");
                let divProbStat = document.createElement("div");
                divProbStat.classList.add("inputBox1");
                divProbStat.innerHTML = category+" :"+problem;
                let divSolution = document.createElement("div");
                divSolution.classList.add("inputBox2");
                divSolution.innerHTML = resultFetched;
                let delButton = document.createElement("button");
                delButton.type = "reset";
                delButton.id = "deleteBtn";
                delButton.onclick = delBtn();
                let iDelBtn = document.createElement("i");
                iDelBtn.classList.add("fa-solid","fa-trash-can","fa-3x");
                delButton.appendChild(iDelBtn);
                divCont.appendChild(divProbStat);
                divCont.appendChild(divSolution);
                divCont.appendChild(delButton);
    resultCon.appendChild(divCont); 
   })
   

   document.querySelector(".inputBox1").innerHTML = category+" :"+problem;
   var set =  document.querySelector(".inputBox1").value;
   var wet =  document.querySelector(".inputBox2").innerHTML;
   localStorage.setItem(set,wet);
}


function delBtn(ele){
    console.log("working delete btn")
    document.querySelector(".inputBox1").innerHTML = "";
    document.querySelector(".inputBox2").innerHTML = "";
    localStorage.removeItem(ele);
}   