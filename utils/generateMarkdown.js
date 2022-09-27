// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
*[description]
${data.description}
*[Installation]
${data.installation}
*[usage]
${data.usage}
*[licence]
${data.licence}
*[Contributing]
${data.Contributing}
*[test]
${data.test}
*[questions]
${data.email}
${data.github}
## Installation
${data.installation}
## Usage
${data.usage}
## Licence
${data.licence}
## Contributing
${data.Contributing}
## Test
${data.test}
## Questions
${data.email}
## Github
${data.github}
`;
}
module.exports = generateMarkdown;
