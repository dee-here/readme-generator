// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// should have a couple license options
function renderLicenseBadge(license) {
//   console.log("renderLicenseBadge ", license);
//   return `## Description 
// ${license.description}  `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //* return a string that has the link to selected license
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //* create a conditional to check if license exists
  //* call renderlicenseBadge and renderlicenseLink
  //* use template literal to format license section and call functions
  //* return template literal

}

//genearte title

function generateTitle(data) {
  return `# ${data.title}  `;
}
//genearte desc
function generateDescription(data) {
  return `## Description 
${generateDeployedLink(data)}
${data.description}  `;
}
//genearte deployed link
function generateDeployedLink(data) {
  return `[${data.title}](${data.deployedLink})  `;
}
//genearte instalation
function generateInstallation(data) {
  return `## Installation 
${data.installation}  `;
}
//genearte Usage
function generateUsage(data) {
  return `## Usage
${data.usage}  `;
}
//genearte contributions
function generateContribution(data) {
  return `## Contribution
${data.contribution}  `;
  }
//genearte tests
function generateTests(data) {
  return `## Tests
${data.test}  `;
  }

// generate author info
function generateAuthor(data) {
  return `## Author Info

Deepak Sinha
  
* [Portfolio](https://dee-here.github.io/portfolio/)
* [Github](https://github.com/dee-here)  `;
  } 


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //* create layout of what you markdown readme with template literals
  //* hint - call renderlicense functions inside this function
  console.log("generateMarkdown with ", data);

  //${renderLicenseBadge(data)}

  return `${generateTitle(data)}
${generateDescription(data)}
${generateInstallation(data)}
${generateUsage(data)}
${generateContribution(data)}
${generateTests(data)}
${generateAuthor(data)}
`;
}

module.exports = generateMarkdown;
