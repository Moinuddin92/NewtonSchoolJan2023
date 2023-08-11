// javascript code goes here
const txtDiv = document.getElementById("text-container");
const clrBox = document.querySelector("#colorbox");
const clrChngBtn = document.querySelector("#colorchange");
const fontSizeInput = document.querySelector("#fontsize");
const undrBtn = document.querySelector("#underline");
const italicBtn = document.querySelector("#italic");
const boldBtn = document.querySelector("#bold");
const fontList = document.querySelector("#list");
const getStyleBtn = document.querySelector("#getstyle");
const pTag = document.querySelector("#css-props");

clrChngBtn.addEventListener("click",()=>{
    txtDiv.style.color=clrBox.value;
});

fontSizeInput.addEventListener("input",()=>{
    txtDiv.style.fontSize = fontSizeInput.value+"px";
});

undrBtn.addEventListener("click",()=>{
    txtDiv.style.textDecoration = txtDiv.style.textDecoration === 'underline' ? 'none' : 'underline';
});

italicBtn.addEventListener("click",()=>{
    txtDiv.style.fontStyle = txtDiv.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

boldBtn.addEventListener("click",()=>{
    txtDiv.style.fontWeight = txtDiv.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

fontList.addEventListener("change",()=>{
    txtDiv.style.fontFamily = fontList.value;
});

function rgbToNamedColor(rgbValue){
    var colors = {
        'rgb(0, 0, 0)': 'black',
        'rgb(255, 0, 0)': 'red',
        'rgb(0, 128, 0)': 'green',
        'rgb(0, 0, 255)': 'blue',
    }
    return colors[rgbValue] || rgbValue;
};

getStyleBtn.addEventListener("click",()=>{
    const st = window.getComputedStyle(txtDiv);
    const cssText = `color: ${rgbToNamedColor(st.color)}; font-size: ${st.fontSize}; text-decoration: ${st.textDecoration}; font-style: ${st.fontStyle}; font-weight: ${st.fontWeight === '700' ? 'bold' : st.fontWeight}; font-family: ${st.fontFamily};`
    pTag.textContent = cssText;
});