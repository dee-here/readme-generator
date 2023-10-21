// License badges for licenses
const licenseBadges = {
  MIT: "https://img.shields.io/badge/License-MIT-yellow.svg",
  Apache: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
  GPL: "https://img.shields.io/badge/License-GPL%20v3-blue.svg",
  Unlicense: "https://img.shields.io/badge/license-Unlicense-blue.svg",
};

const licenseLinks = {
  MIT: "https://choosealicense.com/licenses/mit/",
  Apache: "https://choosealicense.com/licenses/apache-2.0/",
  GPL: "https://choosealicense.com/licenses/gpl-3.0/",
  Unlicense: "https://choosealicense.com/licenses/unlicense/",
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// should have a couple license options
function renderLicenseBadge(data) {
  return `![License Badge](${licenseBadges[data.license]})  \n`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  //* return a string that has the link to selected license
  return `[License Link](${licenseLinks[data.license]})  \n`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  //* create a conditional to check if license exists
  //* call renderlicenseBadge and renderlicenseLink
  //* use template literal to format license section and call functions
  //* return template literal
  if (data.addLicense) {
    return `## License
${renderLicenseBadge(data)}
${renderLicenseLink(data)}\n`;
  }
  return ``;
}

//generate title

function generateTitle(data) {
  return `# ${data.title}
${renderLicenseBadge(data)}\n`;
}
//generate desc
function generateDescription(data) {
  return `## Description 
${generateDeployedLink(data)}
${data.description}\n`;
}
//generate deployed link
function generateDeployedLink(data) {
  return `[${data.title}](${data.deployedLink})\n`;
}
//generate instalation
function generateInstallation(data) {
  return `## Installation 
${data.installation}\n`;
}
//generate Usage
function generateUsage(data) {
  return `## Usage
${data.usage}\n`;
}
//generate contributions
function generateContribution(data) {
  return `## Contribution
${data.contribution}\n`;
}
//generate tests
function generateTests(data) {
  return `## Tests
${data.test}\n`;
}

//get license section for TOC
function getLicenseforToc(data) {
  if (data.tableOfContents && data.addLicense) {
    return `- [License](#license)\n`;
  } else return "";
}

// generate table of contents
function generateTableOfContents(data) {
  if (data.tableOfContents) {
    return `## Table of Contents  
- [Description](#description)
- [Installation](#installation)  
- [Usage](#usage)  
- [Contribution](#contribution)  
- [Tests](#tests)  
- [Author Info](#author-info)  
${getLicenseforToc(data)}\n`;
  } else return "";
}

// generate author info
function generateAuthor(data) {
  return `## Author Info

${data.name}
* [Portfolio](https://${data.github}.github.io/portfolio/)
* [Github](https://github.com/${data.github})
* [Questions ](mailto:${data.email})\n`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //* create layout of what you markdown readme with template literals

  return `${generateTitle(data)}
${generateDescription(data)}
${generateTableOfContents(data)}
${generateInstallation(data)}
${generateUsage(data)}
${generateContribution(data)}
${generateTests(data)}
${generateAuthor(data)}
${renderLicenseSection(data)}\n`;
}

module.exports = generateMarkdown;
