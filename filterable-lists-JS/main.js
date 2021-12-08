// TODO: Add your import statements here.
import { getRoles, getCompanies } from './modules/salaryData.js';
import { getAverageSalaryByRole, getAverageSalaryByCompany, getSalaryAtCompany, getIndustryAverageSalary } from './modules/calculations.js';
import { formatNumber } from './modules/utilities.js';
// TODO: Get the companies and roles using the salaryData module.
const companies = getCompanies();
const roles = getRoles();

// Create input buttons for every company and role represented in the data.
renderInputButtons(companies, 'شرکت');
renderInputButtons(roles, 'شغل');

// This function will create a new <section> with radio
// inputs based on the data provided in the labels array.
function renderInputButtons(labels, groupName) {
    const container = document.createElement('section');
    container.setAttribute('id', `${groupName}Inputs`);

    let header = document.createElement('h3');
    header.innerText = `انتخاب ${groupName}`;
    container.appendChild(header);

    labels.forEach(label => { // For each label...
        // Create the radio input element.
        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'option');

        let inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'radio');
        inputElement.setAttribute('name', groupName);
        inputElement.setAttribute('value', label);
        divElement.appendChild(inputElement);

        // Create a label for that radio input element.
        let labelElement = document.createElement('label');
        labelElement.setAttribute('for', label);
        labelElement.innerText = label;
        divElement.appendChild(labelElement);

        // Update the results when the input is selected.
        inputElement.addEventListener('click', updateResults);

        container.appendChild(divElement);
    });

    document.querySelector('main').prepend(container);
}

function updateResults() {
    // Get the current selected company and role from the radio button inputs.
    const company = document.querySelector("input[name='شرکت']:checked").value;
    const role = document.querySelector("input[name='شغل']:checked").value;

    // If either the company or role is unselected, return.
    if (!company || !role) { return; }

    // TODO: Use the workAroundModule functions to calculate the needed data.
    const averageSalaryByRole = formatNumber(getAverageSalaryByRole(role));
    const averageSalaryByCompany = formatNumber(getAverageSalaryByCompany(company));
    const salary = formatNumber(getSalaryAtCompany(role, company));
    const industryAverageSalary = formatNumber(getIndustryAverageSalary());

    // Render them to the screen.
    document.getElementById('salarySelected').innerText = `حقوق ${role} در ${company} ${salary} ريال است`;
    document.getElementById('salaryAverageByRole').innerText = ` حقوق میانگین برای یک ${role} ${averageSalaryByRole} ريال است`;
    document.getElementById('salaryAverageByCompany').innerText = ` حقوق میانگین در ${company} ${averageSalaryByCompany} ريال است`;
    document.getElementById('salaryAverageIndustry').innerText = ` حقوق میانگین در بخش شرکتهای فناوری ${industryAverageSalary} ريال است`;
}



