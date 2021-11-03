function numSys() {
    let amount1 = 3500;
    let amount2 = 35.05;
    let amount3 = -3500;
    elBasic = document.getElementById('basic');
    elDecimalPercent = document.getElementById('decimalPercent');
    elUnit = document.getElementById('unit');
    elCurrency = document.getElementById('currency');
    elScientificEngineering = document.getElementById('scientificEngineering');
    elDisplayingSigns = document.getElementById('displayingSigns');

    elBasic.innerHTML = new Intl.NumberFormat('fa-IR-u-nu-arab', { numberingSystem: "arabext" }).format(amount1);
    elDecimalPercent.innerHTML = new Intl.NumberFormat('fa-IR', { style: 'decimal' }).format(amount1)
        + "<br>" +
        new Intl.NumberFormat('fa-IR', { style: 'percent' }).format(amount1);
    elUnit.innerHTML = new Intl.NumberFormat('fa-IR', { style: 'unit', unit: 'liter' }).format(amount1)
        + "<br>" +
        new Intl.NumberFormat('fa-IR', { style: 'unit', unit: 'liter', unitDisplay: 'long' }).format(amount1);
    elCurrency.innerHTML = new Intl.NumberFormat('fa-IR', {
        style: 'currency',
        currency: 'IRR',
        currencyDisplay: 'name',
        maximumFractionDigits: 2
    }).format(amount1)
        + "<br>" +
        new Intl.NumberFormat('ar-IQ', {
            style: 'currency',
            currency: 'IRR',
            currencyDisplay: 'name',
            maximumFractionDigits: 2
        }).format(amount1)
        + "<br>" +
        new Intl.NumberFormat('ha-CH', {
            style: 'currency',
            currency: 'IRR',
            maximumFractionDigits: 2
        }).format(amount1)
        + "<br><br><strong>مبالغ اعشاری: </strong><br>" +
        new Intl.NumberFormat('fa-IR', {
            style: 'currency',
            currency: 'IRR',
            currencyDisplay: 'name',
            maximumFractionDigits: 2

        }).format(amount2)
        + "<br>" +
        new Intl.NumberFormat('ar-IQ', {
            style: 'currency',
            currency: 'IRR',
            currencyDisplay: 'name',
            maximumFractionDigits: 2
        }).format(amount2)
        + "<br>" +
        new Intl.NumberFormat('ha-CH', {
            style: 'currency',
            currency: 'IRR',
            maximumFractionDigits: 2
        }).format(amount2)
        + "<br><br><strong>مبالغ منفی: </strong><br>" +
        new Intl.NumberFormat('fa-IR', {
            style: 'currency',
            currency: 'IRR',
            currencyDisplay: 'name',
            maximumFractionDigits: 2

        }).format(amount3)
        + "<br>" +
        new Intl.NumberFormat('ar-IQ', {
            style: 'currency',
            currency: 'IRR',
            currencyDisplay: 'name',
            maximumFractionDigits: 2
        }).format(amount3)
        + "<br>" +
        new Intl.NumberFormat('ha-CH', {
            style: 'currency',
            currency: 'IRR',
            maximumFractionDigits: 2
        }).format(amount3);

    elScientificEngineering.innerHTML =
        "<strong>عدد ۹۸۷۶۵۴۳۲۱ در قالبهای مختلف:</span><br><br><strong>در قالب فارسی علمی \"مرتبه بزرگی\" > عدد ۹ ممیز ۸۷۷ در ۱۰ به توان ۸:</strong><br>"
        + "<span dir=\"ltr\">" +
        new Intl.NumberFormat('fa-IR', { notation: "scientific" }).format(987654321)
        + "<br><strong><bdi>در قالب عربی علمی \"مرتبه بزرگی\" > عدد ۹ ممیز ۸۷۷ در ۱۰ به توان ۸:</strong></bdi><br>" +
        new Intl.NumberFormat('ar-IQ', { notation: "scientific" }).format(987654321)
        + "<br><bdi><strong>در قالب فارسی مهندسی: \"عددی قابل تقسیم به سه در عدد ۱۰ به توان رسیده\" > عدد ۹۸۷ ممیز ۶۵۴ در ۱۰ به توان ۶:</strong></bdi><br>" +
        new Intl.NumberFormat('fa-IR', { notation: "engineering" }).format(987654321)
        + "<br><bdi><strong>در قالب فارسی فشرده: \"کوتاه\" :</strong><br>" +
        new Intl.NumberFormat('fa-IR', { notation: "compact" }).format(987654321)
        + "<br><strong>در قالب فارسی فشرده: \"بلند\" :</strong><br><bdi>" +
        new Intl.NumberFormat('fa-IR', {
            notation: "compact",
            compactDisplay: "long"
        }).format(987654321)
        + "</bdi></span>";

    elDisplayingSigns.innerHTML = "<bdi> یوان چین: &nbsp;&nbsp;" + new Intl.NumberFormat('fa', {
        style: 'currency',
        currency: 'CNY',

        signDisplay: 'always'
    }).format(amount1)
        + "<br>ین ژاپن: &nbsp;&nbsp;" +
        new Intl.NumberFormat('fa', {
            style: 'currency',
            currency: 'JPY',
            signDisplay: 'always'
        }).format(amount3)
        + "<br>دینار عراق : &nbsp;&nbsp;" +
        new Intl.NumberFormat('fa', {
            style: 'currency',
            currency: 'IQD',
            currencyDisplay: 'narrowSymbol',
            signDisplay: 'always'
        }).format(amount1) + "</bdi>";
}

window.addEventListener('load', numSys);