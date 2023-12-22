document.getElementById("review_form").addEventListener('submit', function(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    name = name.trim();
    var review = document.getElementById('review_text').value;
    if (!check(name) && !check(review)) {
        var reviewData = {
            name,
            review
        };
        var existingReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        existingReviews.push(reviewData);
        localStorage.setItem('reviews', JSON.stringify(existingReviews));
        document.getElementById('review_form').reset();
        displayReviews();
        toastr.info('Отзыв отправлен', 'Спасибо!');
        var el = document.querySelector('.toast-info');
        el.style.backgroundColor ='green';
    }
});

function displayReviews() {
    var reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    var reviewsList = document.getElementById('reviews_list');
    reviewsList.innerHTML = '';
    reviews.forEach(function(review) {
        var reviewItem = document.createElement('div');
        reviewItem.className = 'showed_review';
        reviewItem.innerHTML = '<strong>' + review.name + ':</strong> ' + review.review;
        reviewsList.appendChild(reviewItem);
    });
}

function check(text){
    return text.trim() == '';
}

displayReviews();
