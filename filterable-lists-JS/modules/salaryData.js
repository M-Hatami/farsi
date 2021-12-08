const salaryData = [
    { role: 'مدیر ارشد فناوری', company: 'شرکت داده بزرگ', salary: 320000 },
    { role: 'راهبر فنی', company: 'شرکت داده بزرگ', salary: 230000 },
    { role: 'مهندس نرم‌افزار ارشد', company: 'شرکت داده بزرگ', salary: 180000 },
    { role: 'مهندس نرم‌افزار', company: 'شرکت داده بزرگ', salary: 140000 },
    { role: 'مدیر ارشد فناوری', company: 'شرکت داده متوسط', salary: 215000 },
    { role: 'راهبر فنی', company: 'شرکت داده متوسط', salary: 165000 },
    { role: 'مهندس نرم‌افزار ارشد', company: 'شرکت داده متوسط', salary: 140000 },
    { role: 'مهندس نرم‌افزار', company: 'شرکت داده متوسط', salary: 115000 },
    { role: 'مدیر ارشد فناوری', company: 'شرکت داده کوچک', salary: 175000 },
    { role: 'راهبر فنی', company: 'شرکت داده کوچک', salary: 135000 },
    { role: 'مهندس نرم‌افزار ارشد', company: 'شرکت داده کوچک', salary: 115000 },
    { role: 'مهندس نرم‌افزار', company: 'شرکت داده کوچک', salary: 95000 },
];

const getRoles = () => {
    return ['مدیر ارشد فناوری', 'راهبر فنی', 'مهندس نرم‌افزار ارشد', 'مهندس نرم‌افزار'];
}

const getCompanies = () => {
    return ['شرکت داده بزرگ', 'شرکت داده متوسط', 'شرکت داده کوچک'];
}

const getDataByRole = role => {
    return salaryData.filter(obj => obj.role === role);
}

const getDataByCompany = company => {
    return salaryData.filter(obj => obj.company === company);
}

export { getRoles, getCompanies, getDataByRole, getDataByCompany };
export default salaryData;