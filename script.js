window.onload = function() {
    var visitorCounter = localStorage.getItem('visitorCounter') ? parseInt(localStorage.getItem('visitorCounter')) : 0;
    visitorCounter++;
    localStorage.setItem('visitorCounter', visitorCounter);
    document.getElementById('visitor-counter').innerText = 'Visitor Count: ' + visitorCounter;

    setInterval(function() {
        var now = new Date();
        var time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
        var date = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();
        document.getElementById('time-date').innerText = 'Time: ' + time + ' Date: ' + date;
    }, 1000);
}





var acc = document.getElementsByClassName('accordion-button');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
}


var buttons = document.querySelectorAll('#navigation-strip button');
var accordions = document.querySelectorAll('.accordion-item');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        accordions[index].querySelector('.accordion-button').click();
        accordions[index].scrollIntoView({behavior: 'smooth'});
    });
});

