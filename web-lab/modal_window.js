document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('modal');

    modal.style.display = 'block';

    var closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});
