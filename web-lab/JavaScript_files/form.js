const review = document.getElementById("review")
const button = document.querySelector(".submit_button")

let reviews = [];
//
// name.addEventListener("submit", function (event){
//     event.preventDefault();
//     addReview(review.value);
// });

button.addEventListener("click", function (event){
    event.preventDefault();
    console.log("asasd");
    addReview(review.value);
})
function isNotBlank(text){
    return text.trim().length > 0;
}

function addReview(review){
    if(isNotBlank(review)){
        const review = {
            id: Date.now(),
            name: review
        };

        reviews.push(review);
        console.log(reviews)
        addToLocalStorage(reviews);
        review.value = "";
    }
}

function addToLocalStorage(reviews){
    localStorage.setItem("reviews", JSON.stringify(reviews))
}

function getFromLocalStorage(){
    if (localStorage.getItem("reviews")){
        reviews = JSON.parse(localStorage.getItem("reviews"))

    }
}




