function checkName(e) {
    const name = /^[\u0620-\u063a\u0641-\u064a\u0653-\u0655\u0670-\u06D3\u06d5\s]{3,25}$/;

    let elInfBox = e.target.nextSibling;
    let elLabel = e.target.previousSibling.previousSibling.previousSibling.textContent
    if (e.target.value.match(name)) {
        elInfBox.style.cssText = "color:green; font-weight:900;";
        elInfBox.innerHTML = " &#10003;"
        e.target.style.cssText = "border-color: green; box-shadow: -0.5 0.5rem 0.2rem #fff inset, 0 0 0.5rem green; outline: 0;";
    } else {
        elInfBox.innerHTML = "   &#10007; گزینه " + elLabel + "، حداقل به تعداد ۳ تا ۲۵ عدد حرف از حروف فارسی نیاز دارد، لطفاً از نویسه‌های غیر حرفی مانند اعداد یا نشانه‌ها استفاده نکنید."
        elInfBox.style.cssText = "color:crimson; font-weight:900;";
        e.target.style.cssText = "border-color: crimson; box-shadow: -0.5 0.5rem 0.2rem #fff inset, 0 0 0.5rem crimson; outline: 0;";
    }

}

function checkTelNu(e) {
    const telNu = /^[0-9\u0660-\u0669\u06f0-\u06f9]{8,14}$/;

    let elInfBox = e.target.nextSibling;
    let elLabel = e.target.previousSibling.previousSibling.previousSibling.textContent
    if (e.target.value.match(telNu)) {
        elInfBox.style.cssText = "color:green; font-weight:900;";
        elInfBox.innerHTML = " &#10003;"
        e.target.style.cssText = "border-color: green; box-shadow: -0.5 0.5rem 0.2rem #fff inset, 0 0 0.5rem green; outline: 0;";
    } else {
        elInfBox.innerHTML = "   &#10007; گزینه " + elLabel + "، حداقل به تعداد ۸ تا ۱۴ عدد نیاز دارد، لطفاً از نویسه‌های غیر عددی مانند حروف یا نشانه‌ها استفاده نکنید."
        elInfBox.style.cssText = "color:crimson; font-weight:900;";
        e.target.style.cssText = "border-color: crimson; box-shadow: -0.5 0.5rem 0.2rem #fff inset, 0 0 0.5rem crimson; outline: 0;";
    }
}

function checkٍEmail(e) {
    const email = /^[a-zA-Z0-9-_\u0600-\u06ff\.]+[@{1}][a-zA-Z0-9-\u0600-\u06ff\.]{7,45}$/;

    let elInfBox = e.target.nextSibling;
    let elLabel = e.target.previousSibling.previousSibling.previousSibling.textContent
    if (e.target.value.match(email)) {
        elInfBox.style.cssText = "color:green; font-weight:900;";
        elInfBox.innerHTML = " &#10003;"
        e.target.style.cssText = "border-color: green; box-shadow: -0.5 0.5rem 0.2rem #fff inset, 0 0 0.5rem green; outline: 0;";
    } else {
        elInfBox.innerHTML = "   &#10007; گزینه " + elLabel + " صحیح نمی‌باشد، دوباره سعی کنید."
        elInfBox.style.cssText = "color:crimson; font-weight:900;";
        e.target.style.cssText = "border-color: crimson; box-shadow: -0.5 0.5rem 0.2rem #fff inset, 0 0 0.5rem crimson; outline: 0;";
    }
}

function checkPwd(pw) {
    return /.{1,}/.test(pw) * (                                                     // حداقل هشت نویسه
        /.{8,}/.test(pw)                                                           // رشته بلندتر بهتر
        + /[\u0620-\u063a\u0641-\u064a\u0653-\u0655\u0670-\u06D3\u06d5]/.test(pw)     // حروف فارسی بهتر
        + /[\d\u0660-\u0669\u06f0-\u06f9]/.test(pw)                                   // اعداد شامل فارسی و عربی و انگلیسی
        + /[×!@#\$%\^&\*_\+=-\|\\:]/.test(pw)                                    // نویسه های ویژه
        + /[\s\(\){}<>«»\[\]]/.test(pw)                                                   // فاصله و علامتهای قلاب
        + /[a-z][A-Z]/.test(pw)                                         // اگر غیرفارسی، ترکیبی از حروف بزرگ و کوچک
    )
}

function pwdStrengthStyle() {
    switch (checkPwd(pwInput.value)) {
        case 1:
            pwInput.style.cssText = "border-bottom-color:red;";
            pwInput.nextSibling.innerHTML = " خیلی ضعیف ";
            pwInput.nextSibling.style.color = "red"
            break;
        case 2:
            pwInput.style.cssText = "border-bottom-color:orange;";
            pwInput.nextSibling.innerHTML = " ضعیف ";
            pwInput.nextSibling.style.color = "orange"
            break;
        case 3:
            pwInput.style.cssText = "border-bottom-color:#CCD100;";
            pwInput.nextSibling.innerHTML = " متوسط ";
            pwInput.nextSibling.style.color = "#CCD100"
            break;
        case 4:
            pwInput.style.cssText = "border-bottom-color:LawnGreen;";
            pwInput.nextSibling.innerHTML = " میتواند بهتر باشد: ";
            pwInput.nextSibling.style.color = "LawnGreen"
            break;
        case 5:
            pwInput.style.cssText = "border-bottom-color:green;";
            pwInput.nextSibling.innerHTML = " قوی ";
            pwInput.nextSibling.style.color = "green"
            break;
        default:
            pwInput.style.cssText = "border-color: #8ccdff; box-shadow: -0.5 0.5rem 0.2rem #fff inset, 0 0 0.5rem #8ccdff; outline: 0;";
            pwInput.nextSibling.innerHTML = "";
            pwInput.nextSibling.style.color = "black"
            break;
    }
}

function reveal() {
    var x = document.getElementById("pwd");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

//برای بالا بردن سرعت بارگذاری بجای تعریف چند 
//addEventListener
//برای هر گزینه، از روش معروف به 
//Event Delegation
//استفاده شده است
const elNames = document.getElementById('signUpForm');                             //userRegForm is the parent object that is a Form
elNames.addEventListener('input', function (e) {                                    // e is a short for Event, some developer also use e for error
    const target = e.target;                                                        // target is a property of Event Object that contains the HTML tag/id of the object that the event occurred on it
    if (target.matches("input#firstName") || target.matches("input#lastName")) {    // if the Target equals either of these then execute the already defined function
        checkName(e);
    }
})

document.getElementById('mobile').addEventListener('input', checkTelNu);
document.getElementById('email').addEventListener('input', checkٍEmail);
let pwInput = document.getElementById('pwd')
pwInput.addEventListener('input', function () {
    document.getElementById('strength').value = checkPwd(pwInput.value);
    pwdStrengthStyle();
})
//document.getElementById('firstName').addEventListener('input', checkName);
//document.getElementById('lastName').addEventListener('input', checkName);

// این تابع با بارگذاری صفحه گزینه مورد نظر
// در برگه اطلاعات را آماده دریافت اطلاعات میکند
/*
function setupForm() {
    let textInput = document.getElementsById('firstName');
    textInput.focus();
}

document.addEventListener('load', setupForm);
*/