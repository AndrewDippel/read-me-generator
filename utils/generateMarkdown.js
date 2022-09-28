// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const typeOfLicense = data.typeOfLicense;
  let badgeLink = " ";
  if (typeOfLicense === "MIT Licence") {
    badgeLink = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };
  if (typeOfLicense === "Eclipse Public License") {
    badgeLink = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  };
  if (typeOfLicense === "Apache Licence") {
    badgeLink = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  };
  if (typeOfLicense === "GNU Licence") {
    badgeLink = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  };
  if (typeOfLicense === "N/A") {
    badgeLink = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  };
  return badgeLink
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${renderLicenseBadge(data)}
  ## Table of contents
* [description](#description)
* [Installation](#Installation)
* [usage](#Usage)
* [licence](#Licence)
* [Contributing](#Contributing)
* [test](#Test)
* [questions](#Questions)

## Installation
${data.installation}
## Usage
${data.usage}
## Licence
${renderLicenseBadge(data)}
## Contributing
${data.Contributing}
## Test
${data.test}
## Questions
For any Questions please contact me through either github or email. Thanks.\n
${data.email}\n
${data.github}
`;
}
module.exports = generateMarkdown;
