document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    const reviewsContainer = document.querySelector('.reviews-container');

    function fetchAndDisplayReviews() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                preloader.style.display = 'none';
                reviewsContainer.innerHTML = '';
                const randomReviews = getRandomElements(data, 3);
                randomReviews.forEach(review => {
                    const reviewElement = document.createElement('div');
                    reviewElement.classList.add('review');
                    reviewElement.innerHTML =
                        '<h3>' + review.name+'</h3>' +
                        '<p>' + review.body + '</p>'
                    ;
                    reviewsContainer.appendChild(reviewElement);
                });
            })
            .catch(error => {
                preloader.style.display = 'none';
                console.error('There has been a problem with your fetch operation:', error);
                const errorMessage = document.createElement('div');
                errorMessage.style.color = 'red';
                errorMessage.textContent = '⚠ Что-то пошло не так';
                document.body.appendChild(errorMessage)
            });
    }

    fetchAndDisplayReviews();

    const refreshButton = document.createElement('button');
    refreshButton.textContent = 'Обновить отзывы';
    refreshButton.addEventListener('click', fetchAndDisplayReviews);
    document.body.appendChild(refreshButton);
});

function getRandomElements(array, numElements) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numElements);
}
