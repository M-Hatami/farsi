
const elMobile = document.getElementById('mobile');

String.prototype.toFaNum = function () {
    elValue = elMobile.value;
    if (elValue.match(/[0-9]/g)) {
        return this.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])
    } else if (elValue.match(/[\u0660-\u0669]/g)) {
        return this.replace(/[\u0660-\u0669]/g,
            d => '۰۱۲۳۴۵۶۷۸۹'[d.charCodeAt() - 1632])
    } else {
        return this;
    }
}

function convToFa() {
    elMobile.value = elMobile.value.toFaNum();
}

elMobile.addEventListener('focusout', convToFa);

//اعداد انگلیسی (0123456789) و اعداد عربی (٠١٢٣٤٥٦٧٨٩) را به اعداد فارسی تبدیل میکند