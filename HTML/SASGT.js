var givenTarget = document.querySelector(".given-target");
var resultDiv = document.querySelector(".result");
var findBtn = document.querySelector(".sum-up");

findBtn.addEventListener("click", () => {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j >= 0; j--) {
            if (arr[i] + arr[j] == givenTarget.value) {
                resultDiv.textContent = "The indexes are " + i + " and " + j;
            }

        }

    }
})