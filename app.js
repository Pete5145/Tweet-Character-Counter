// Select all the elements of interest
let tweetBox = document.querySelector("#txtBox");
let displayBox = document.querySelector("#displayBox");

tweetBox.addEventListener("input", () => {
    let numOfWords = tweetBox.value.length;
    displayBox.innerHTML = `You have used ${numOfWords} characters and you have ${280 - numOfWords} left!`
    displayBox.style.color = "Blue";

    if(numOfWords > 280) {
        displayBox.innerHTML = "You have exceeded the numbers of characters!";
        displayBox.style.color = "red";
        tweetBox.addEventListener("keydown", e => {
                e.preventDefault();
                return false;
        });
        alert("You have exceeded the numbers of characters!");
    }  
    });