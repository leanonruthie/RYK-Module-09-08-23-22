// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Asked classmates additional questions for the links below
function renderLicenseBadge(license) {
  if (license == 'None') {
    return '';
  } else if (license == 'MIT'){
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else if (license == 'Apache 2.0'){
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  } else if (license == 'GPL 3.0'){
    return ``
  } else if (license == 'BSD 3'){
    return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'None') {
    return '';
  } else if (license == 'MIT'){
    return 'https://opensource.org/licenses/MIT'
  } else if (license == 'Apache 2.0'){
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if (license == 'GPL 3.0'){
    return ``
  } else if (license == 'BSD 3'){
    return 'https://opensource.org/licenses/BSD-3-Clause'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'none') {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}
  ${data.description}
  

  ${renderLicenseBadge(license)} ${data.license}

  # Table of Contents 
  * tbd
  
  # Repository
 https://github.com/${data.github}/${data.repository}
  
  # Package 
  ${data.package}
   
  # Command
  ${data.test}

  # URL 
  ${data.url}
`;
}

module.exports = generateMarkdown;
