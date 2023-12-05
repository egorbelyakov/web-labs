(window.onload=function() {
    window.addEventListener('load', function() {
        let timing = performance.timing;
        let loadTime = timing.loadEventStart - timing.navigationStart;
        let div = document.createElement('div');
        div.className = 'load_time'
        div.innerHTML = 'Время загрузки страницы: ' + loadTime + 'мс';

        document.body.append(div);
    });
})();