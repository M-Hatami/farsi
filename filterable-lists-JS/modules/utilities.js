export const formatNumber = number => {
    var str = number.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(?=(\d{3})+ريال)/g, '۱ريال,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '۱ريال ');
    }
    return str.join('.');
}