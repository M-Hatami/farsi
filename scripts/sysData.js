function showPosition(e) {
  let sx = document.getElementById('sx');
  let sy = document.getElementById('sy');
  let px = document.getElementById('px');
  let py = document.getElementById('py');
  let cx = document.getElementById('cx');
  let cy = document.getElementById('cy');
  sx.innerText = e.screenX;
  sy.innerText = e.screenY;
  px.innerText = e.pageX;
  py.innerText = e.pageY;
  cx.innerText = e.clientX;
  cy.innerText = e.clientY;
}
document.addEventListener('mousemove', showPosition);

//----------------------------------------------------------
function showFrameSize() {
  let elSize = document.getElementById("windowSize");
  elSize.innerHTML = "نمایش اندازه صفحه شما بصورت زنده: <span dir=\"ltr\" style=\"color:white; background-color:maroon; font-weight:bold; border-radius:7%; padding:0 2px; margin: 0 2px;\">"
    + window.innerWidth + " x " + window.innerHeight + "</blink></span><span dir=\"rtl\"> نقطه در هر ۲۵.۴ هزارم‌متر (اینچ)</span>"
    ;
}

function showSystemInfo() {
  let elSize = document.getElementById("sysInf");
  elSize.innerHTML = "<span> سامانه عامل: " + osName()
    + "</span><br><span>زبان‌های مورد استفاده کاربر: " + navigator.languages
    + "</span><br><span>" + browserType()
    + "</span><br><span>منطقه زمانی: " + Intl.DateTimeFormat().resolvedOptions().timeZone
    + "</span><br><span> ساعت به وقت شما: " + Date().toLocaleString('fa-IR').replace(/([۰-۹])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728));
  + "</span>";
}

function osName() {
  let ffUA = navigator.userAgent.toLowerCase().indexOf('firefox');
  let yaUA = navigator.userAgent.toLowerCase().indexOf('yabrowser');
  if (typeof navigator.userAgentData !== "undefined" && typeof navigator.userAgentData.platform !== "undefined") {
    return navigator.userAgentData.platform
  } else {
    let platfPosS = navigator.userAgent.indexOf('(') + 1;
    let platfPosE = navigator.userAgent.search(/\D\d\D\s/gm) + 2;
    return navigator.userAgent.substring(platfPosS, platfPosE);
  }

}

function browserType() {
  let ffUA = navigator.userAgent.toLowerCase().indexOf('firefox');
  let iOSUA = navigator.userAgent.toLowerCase().indexOf('macintosh');
  if (ffUA < 1 && iOSUA < 1) {
    let UA = navigator.userAgentData.brands
    for (let b in UA) {
      let browserCleaned = UA[b].brand.toString().toLowerCase().trim().replace(';', ' ')
      if (browserCleaned !== "not a brand" && browserCleaned !== "chromium")
        return 'مرورگر: ' + UA[b].brand + '&nbsp;&nbsp; نسخه: ' + UA[b].version
    }
  } else if (ffUA > -1) {
    return 'مرورگر: ' + navigator.userAgent.substring(ffUA, ffUA + 7) + '&nbsp;&nbsp; نسخه: ' + navigator.userAgent.substring(ffUA + 8)
  } else if (iOSUA > -1 && Navigator.standalone !== "undefined") {
    return 'مرورگر: iOS ' + navigator.userAgent.substring(iOSUA, iOSUA + 9) + '&nbsp;&nbsp; نسخه: ' + navigator.userAgent.substring(iOSUA + 11)
  }
};


window.addEventListener('load', showFrameSize);
window.addEventListener('resize', showFrameSize);
window.addEventListener('load', showSystemInfo);

//===========================================================
function charCount(e) {
  let elText = document.getElementById('message');
  let textEntered = elText.value;
  let charDisplay = document.getElementById('charactersLeft');
  let counter = (180 - (textEntered.length));
  charDisplay.innerHTML = 'از تعداد ۱۸۰ نویسه، تنها <code><strong>' + counter + '</strong></code> نویسه دیگر باقیمانده است';

  let lastKey = document.getElementById('lastKey');
  lastKey.innerHTML = 'شماره اَسْکی آخرین کلید وارد شده:<code><strong>' + e.keyCode + '</strong></code> یا <code><strong>' + String.fromCharCode(e.keyCode) + '</strong></code>';
}

document.addEventListener('keypress', charCount, false);

//================================
function windowInf() {
  let Msg = 'میزبان: ' + window.location.host + '<br> نام میزبان:' + window.location.hostname;
  Msg += '<br> نشانی: ' + window.location.href + '<br> اصالت: ' + window.location.origin
  Msg += '<br> مسیر: ' + window.location.pathname + '<br> گذرگاه: ' + window.location.port
  Msg += '<br> قرارداد: ' + window.location.protocol;

  document.getElementById('windowInf').innerHTML = Msg;
}

window.addEventListener('load', windowInf);

function clickCounter() {
  if (typeof (Storage) !== "undefined") {
    if (localStorage.clickcount && sessionStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
      sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
      sessionStorage.clickcount = 1;
    }
    document.getElementById("permResult").innerHTML = "شما از ازل تا به حال " + localStorage.clickcount + " بار کلیک کردید.";
    document.getElementById("sessionResult").innerHTML = "شما در این جلسه به تعداد " + sessionStorage.clickcount + " بار کلیک کردید.";
  } else {
    document.getElementById("permResult").innerHTML = "متاسفانه مرورگر شما حافظه دایم شبکه ندارد...";
    document.getElementById("sessionResult").innerHTML = "متاسفانه مرورگر شما حافظه جلسه ندارد...";

  }
}

document.addEventListener('click', clickCounter, false);
