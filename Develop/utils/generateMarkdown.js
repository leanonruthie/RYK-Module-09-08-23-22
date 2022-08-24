// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Asked classmates additional questions for the links below
function renderLicenseBadge(license) {
  if (license == 'None') {
    return '';
  } else if (license == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license == 'Apache 2.0') {
    return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license == 'GPL 3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license == 'BSD 3') {
    return `[![License: BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'None') {
    return '';
  } else if (license == 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  } else if (license == 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if (license == 'GPL 3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  } else if (license == 'BSD 3') {
    return 'https://opensource.org/licenses/BSD-3-Clause'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return '';
  } else if (license == 'MIT') {
    return `MIT Badge uses "![License: MIT]" + "https://img.shields.io/badge/License-MIT-yellow.svg"`
  } else if (license == 'Apache 2.0') {
    return `Apache 2.0 Badge uses "![License: Apache 2.0]" + "https://img.shields.io/badge/License-Apache_2.0-blue.svg"`
  } else if (license == 'GPL 3.0') {
    return `GPL 3.0 Badge uses "![License: GPL v3]" + "https://img.shields.io/badge/License-GPLv3-blue.svg"`
  } else if (license == 'BSD 3') {
    return `BSD 3 Badge uses "![License: BSD 3]" + "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg"`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project} ${renderLicenseBadge(data.license)}
  
  # Description
  ${data.description}

  # Table of Contents 
  * [Description](#description)
  * [Repository](#repository)
  * [Package](#package)
  * [License](#license)
  * [Command](#command)
  * [Test](#test)
  * [URL](#url)
  
  # Repository
  https://github.com/${data.github}/${data.repository}
  
  # Package 
  ${data.package}
  
  # License
  ${renderLicenseSection(data.license)} + ${renderLicenseLink(data.license)}

  # Command
  ${data.command}

  # Test
  ${data.test}

  # URL 
  ${data.url} 
  
`;
}

module.exports = generateMarkdown;
