function greet() {
    let today = new Date();
    let hourNow = today.getHours();
    const elGr = document.getElementById('greeting')

    if (hourNow > 18) {
        elGr.innerHTML = 'سلام، شب بخیر';
    } else if (hourNow > 12) {
        elGr.innerHTML = 'سلام، عصر بخیر';
    } else if (hourNow > 0) {
        elGr.innerHTML = 'سلام، صبح بخیر'
    } else {
        elGr.innerHTML = 'سلام، خوش آمدی';
    }
}


window.addEventListener('load', greet)