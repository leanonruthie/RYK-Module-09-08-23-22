// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'none') {
    license = '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'none') {
    license = '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'none') {
    license = '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}
  ${data.description}

  # Table of Contents 
  * [Repository][#repository]
  * [Package][#package]
  * [License][#license]
  * [Command][#command]
  * [URL][#url]
  
  # Repository
 https://github.com/${data.github}/${data.repository}
  
  # Package 
  ${data.package}

  # License
  * ${data.license}
   
  # Command
  ${data.test}

  # URL 
  ${data.url}
`;
}

module.exports = generateMarkdown;
