
function vaght() {
    const dateTime = document.getElementById('dateTime');
    const dTOptions = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hourCycle: 'h12',
        dayPeriod: 'long'
    };
    date = new Date(Date.now());
    dateTime.innerHTML = "<strong>سال هجری شمسی (به وقت ایران): &nbsp;</strong>" + new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
        weekday: 'long', timeZone: 'Asia/Tehran'
    }).format(date) + ' ' + new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
        month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hourCycle: 'h12',
        dayPeriod: 'long', timeZone: 'Asia/Tehran'
    }).format(date) + "&nbsp;&nbsp;&nbsp;<strong> قالب کوتاه: </strong>" + new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
        timeZone: 'Asia/Tehran'
    }).format(date) + "<br><strong> سال هجـری قـمـری (به وقت ایران): &nbsp;</strong>" + new Intl.DateTimeFormat('fa-IR-u-ca-islamic-nu-arabext', {
        year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric', hourCycle: 'h12',
        dayPeriod: 'long', timeZone: 'Asia/Tehran'
    }).format(date) + "&nbsp;&nbsp;&nbsp;<strong> قالب کوتاه: </strong>" + new Intl.DateTimeFormat('fa-IR-u-ca-islamic', {
        timeZone: 'Asia/Tehran'
    }).format(date) + "<br><strong> وقت بیروت ساحل مدیترانه: </strong>" + new Intl.DateTimeFormat('ar-LB-u-nu-arabext', {
        year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric', hourCycle: 'h12',
        dayPeriod: 'long', timeZone: 'Asia/Beirut'
    }).format(date) + "<br><strong> وقت پکن چین: </strong>" + new Intl.DateTimeFormat('fa-IR-u-ca-chinese', {
        year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric', hourCycle: 'h12',
        dayPeriod: 'long', timeZone: 'Asia/Shanghai'
    }).format(date) + "<br><strong> وقت محلی با قالب فارسی: </strong>" + new Intl.DateTimeFormat('fa-IR-u-nu-arabext', {
        year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric', hourCycle: 'h12',
        dayPeriod: 'long'
    }).format(date) + " <br><strong> وقت محلی با قالب فارسی دری: </strong>" + date.toLocaleDateString('fa-AF', dTOptions);

    // call this function again in 1000ms, so the time is updated
    setTimeout(vaght, 1000);
}
window.addEventListener('load', vaght)
