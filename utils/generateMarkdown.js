const inquirer = require('inquirer');
const fs = require('fs');
const index = require('../index.js');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //'Apache 2.0', 'GPL v3.0', 'MIT', 'None'
  let badge = '';
  if(license === 'Apache 2.0') {
    badge = '![License(https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  } else if (license === 'GPL v3.0') {
    badge = '![License: GPL v3(https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else if (license === 'MIT') {
    badge = '![License: MIT(https://img.shields.io/badge/License-MIT-yellow.svg)]'
  } else if (license === 'None') {
    badge = ''
  }
  return badge;
}

// function for license links 
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'Apache 2.0') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'GPL v3.0') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
  } else if (license === 'MIT') {
    licenseLink = 'https://opensource.org/licenses/MIT'
  } else if (license === 'None') {
    licenseLink = ''
  }
  return licenseLink;   
}

//function to return the section for license in README
function renderLicenseSection(license) {
  let licenseSection = '';
  if (license === 'None') {
    licenseSection = ''
  } else {
    licenseSection = `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return` 
  # ${answer.title}

  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
  ### ${renderLicenseLink(answer.license)}
  
  ## Table of Contents:
  ### * [License](#license)
  ### * [Installation](#installation)
  ### * [Contribution](#contribution)
  ### * [Tests](#tests)
  ### * [Questions?](#questions)

  ## Instalation:
  ### The following steps must be taken to install this app:
  ### ${answer.installation}

  ## Usage:
  ### ${answer.usage}

  ## Contribution:
  ### ${answer.contributions}

  ## Tests:
  ### To test this app, run the following commands in your terminal:
  ### ${answer.test}

  ### Questions?
  ### If you have any questions, please feel free to reach me via:
  ### GitHub: https://github.com/${answer.gitHub}
  ### or
  ### Email: ${answer.email}
`;
}

//exports the .md
module.exports = generateMarkdown;
