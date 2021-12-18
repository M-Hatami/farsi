let alertStyle = "<img src=\"img/ui/alert.svg\" width=\"16px\" height=\"16px\" alt=\"\"> ";

function checkName(e) {
    const name = /^[\u0620-\u063a\u0641-\u064a\u0653-\u0655\u0670-\u06D3\u06d5\s]{3,25}$/;
    let elInfBox = e.target.parentNode.parentElement;
    let elLabel = e.target.nextElementSibling;
    let elMsg = e.target.parentNode.parentNode.lastElementChild;
    if (e.target.value.match(name)) {
        elInfBox.style.borderColor = "#008000";
        elLabel.style.color = "#008000"
        elMsg.innerHTML = " &#10003;"
        elMsg.style.cssText = "color:#008000;  font-weight: 900; -webkit-transform: translate(-15px,-10px); transform: translate(-15px,-10px); padding: 0 10px;"
        //"color: #008000; font-weight: 900;";
    } else {
        elInfBox.style.borderColor = "#d93025";
        elLabel.style.color = "#d93025";
        elMsg.innerHTML = "&#10007; ۳ تا ۲۵ حرف فارسی";
        elMsg.style.cssText = "color:#d93025; -webkit-transform: translate(-15px,-10px); transform: translate(-15px,-10px); padding: 0 10px;"
        //"color: #d93025; font-size: 12px; font-weight:200; text-align:center;";
    }

}

function checkTelNu(e) {
    const telNu = /^[0-9\u0660-\u0669\u06f0-\u06f9]{8,14}$/;

    let elInfBox = e.target.parentNode.parentElement;
    let elLabel = e.target.nextElementSibling;
    let elMsg = e.target.parentNode.parentNode.lastElementChild;
    if (e.target.value.match(telNu)) {
        elInfBox.style.borderColor = "#008000";
        elLabel.style.color = "#008000"
        elMsg.innerHTML = " &#10003;"
        elMsg.style.cssText = "color:#008000; -webkit-transform: translate(-5px,-10px); transform: translate(-45px,-10px); padding: 0 10px;";
        //elMsg.style.cssText = "color: #008000; font-weight: 900;";
    } else {
        elInfBox.style.borderColor = "#d93025";
        elLabel.style.color = "#d93025";
        elMsg.innerHTML = "&#10007; دوباره سعی بفرمایید";
        elMsg.style.cssText = "color:#d93025; -webkit-transform: translate(-15px,-10px); transform: translate(-15px,-10px); padding: 0 10px;";

    }
}

function checkٍEmail(e) {
    const email = /^[a-zA-Z0-9-_\u0600-\u06ff\.]+[@{1}][a-zA-Z0-9-\u0600-\u06ff\.]{7,45}$/;

    let elInfBox = e.target.parentNode.parentElement;
    let elLabel = e.target.nextElementSibling;
    let elMsg = e.target.parentNode.parentNode.lastElementChild;
    let elErMsg = e.target.closest("div.email").lastElementChild;
    if (e.target.value.match(email)) {
        elInfBox.style.borderColor = "#008000";
        elLabel.style.color = "#008000"
        elErMsg.innerHTML = "شما میتوانید از حروف، اعداد و نقطه استفاده فرمائید."
        elErMsg.style.color = "#202125";
    } else {
        elInfBox.style.borderColor = "#d93025";
        elLabel.style.color = "#d93025";
        elErMsg.innerHTML = alertStyle + "آدرس رایانامه وارده صحیح نمی‌باشد، لطفاً دوباره سعی کنید.";
        elErMsg.style.color = "#d93025";
    }
}

function checkPwd(pw) {
    return /.{1,7}/.test(pw) * (                                                     // حداقل هشت نویسه
        /.{8,}/.test(pw)                                                           // رشته بلندتر بهتر
        + /[\u0620-\u063a\u0641-\u064a\u0653-\u0655\u0670-\u06D3\u06d5]/.test(pw)     // حروف فارسی بهتر
        + /[\d\u0660-\u0669\u06f0-\u06f9]/.test(pw)                                   // اعداد شامل فارسی و عربی و انگلیسی
        + /[×!@#\$%\^&\*_\+=-\|\\:\s\(\){}<>«»\[\]]/.test(pw)                                    // نویسه های ویژه
        //+ /[]/.test(pw)                                                   // فاصله و علامتهای قلاب
        + /[a-z][A-Z]/.test(pw)                                         // اگر غیرفارسی، ترکیبی از حروف بزرگ و کوچک
    )
}

let pwInput = document.getElementById('pwd');
let pwConf = document.getElementById('pwdConf');
function pwdStrengthStyle(e) {
    let elInfBox = e.target.parentNode.parentElement;
    let elLbl = document.getElementById('pwdStrength');
    switch (checkPwd(pwInput.value)) {
        case 1:
            elInfBox.style.cssText = "border-bottom-color:red;";
            elLbl.textContent = 'ضعیف';
            elLbl.style.cssText = "color:red; -webkit-transform: translate(5px,0); transform: translate(5px,0); padding: 0 10px;";
            break;
        case 2:
            elInfBox.style.cssText = "border-bottom-color:orange;";
            elLbl.textContent = 'آسیب‌پذیر';
            elLbl.style.color = "orange";
            elLbl.style.cssText = "color:orange; -webkit-transform: translate(5px,0); transform: translate(5px,0); padding: 0 10px;";
            break;
        case 3:
            elInfBox.style.cssText = "border-bottom-color:#CCD100;";
            elLbl.textContent = 'متوسط';
            elLbl.style.color = "#CCD100";
            elLbl.style.cssText = "color:#CCD100; -webkit-transform: translate(5px,0); transform: translate(5px,0); padding: 0 10px;";
            break;
        case 4:
            elInfBox.style.cssText = "border-bottom-color:#12C265;";
            elLbl.textContent = 'قوی';
            elLbl.style.color = "green";
            elLbl.style.cssText = "color:#12C265; -webkit-transform: translate(5px,0); transform: translate(5px,0); padding: 0 10px;";
            break;
        case 5:
            elInfBox.style.cssText = "border-bottom-color:green;";
            elLbl.textContent = 'قوی';
            elLbl.style.color = "green";
            elLbl.style.cssText = "color:green; -webkit-transform: translate(5px,0); transform: translate(5px,0); padding: 0 10px;";
            break;
        default:
            elInfBox.style.cssText = "border-color: #8ccdff; box-shadow: -0.5 0.5rem 0.2rem #fff inset, 0 0 0.5rem #8ccdff; outline: 0;";
            break;
    }
}

function reveal() {
    if (pwInput.type === "password") {
        pwInput.type = "text";
        pwConf.type = "text";
    } else {
        pwInput.type = "password";
        pwConf.type = "password";
    }
}

function pwdConfirmed() {
    let elInfBox1 = pwInput.parentNode.parentElement;
    let elLabel1 = pwInput.nextElementSibling;
    let elInfBox2 = pwConf.parentNode.parentElement;
    let elLabel2 = pwConf.nextElementSibling;
    let elErMsg = pwConf.closest("div.passwd").lastElementChild;
    if (pwInput.value !== pwConf.value && pwConf.value.length > 0) {
        elInfBox1.style.borderColor = "#d93025";
        elLabel1.style.color = "#d93025";
        elInfBox2.style.borderColor = "#d93025";
        elLabel2.style.color = "#d93025";
        elErMsg.innerHTML = alertStyle + "کلمات رمز با هم تطابق ندارند، لطفاً دوباره سعی کنید.";
        elErMsg.style.color = "#d93025";
    } else if (pwInput.value === pwConf.value && pwConf.value.length > 0) {
        elInfBox1.style.borderColor = "#008000";
        elLabel1.style.color = "#008000";
        elInfBox2.style.borderColor = "#008000";
        elLabel2.style.color = "#008000";
        elErMsg.innerHTML = "از ترکیبی از حروف (ترجیحاً فارسی)، اعداد و نشانه‌ها و نویسه‌های ویژه استفاده کنید."
        elErMsg.style.color = "#202125";
    } else {
        return;
    }
}

let elTerms = document.getElementById("trmsConds");
function checkTerms(e) {
    if (!elTerms.checked) {
        let terms = document.getElementById("termsHint");
        elTerms.parentNode.parentNode.style.color = "#d93025";
        elTerms.parentNode.style.borderColor = "#d93025";
        terms.innerHTML = alertStyle + "توافق با مقررات تارنما الزامی است."
        terms.style.color = "#d93025";
        e.preventDefault();                                                                 //prevent submit action
    }
}

//برای بالا بردن سرعت بارگذاری بجای تعریف چند 
//addEventListener
//برای هر گزینه، از روش معروف به 
//Event Delegation
//استفاده شده است
const elForm = document.getElementById('signUpForm');                             //userRegForm is the parent object that is a Form
elForm.addEventListener('focusout', function (e) {                                    // e is a short for Event, some developer also use e for error
    const target = e.target;                                                        // target is a property of Event Object that contains the HTML tag/id of the object that the event occurred on it
    if (target.matches("input#firstName") || target.matches("input#lastName")) {    // if the Target equals either of these then execute the already defined function
        checkName(e);
    } else if (target.matches("input#pwd") || target.matches("input#pwdConf")) {
        pwdConfirmed(e);
    }
})

document.getElementById('mobile').addEventListener('change', checkTelNu);
document.getElementById('email').addEventListener('change', checkٍEmail);
pwInput.addEventListener('input', pwdStrengthStyle);
document.getElementById('pwdReveal').addEventListener('click', reveal);
elForm.addEventListener('submit', checkTerms, false);
