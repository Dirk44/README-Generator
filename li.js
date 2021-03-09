function chooseBadge(license) {
    switch (license) {
        case 'MIT':
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        case 'CC-0':
            return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
        case 'GPLv3':
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        case 'BSD-3-Clause':
            return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
        case 'WTFPL':
            return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
        default:
    }
};

function chooseLicense(license) {
    switch (license) {
        case 'MIT':
            return `[The MIT License](https://opensource.org/licenses/MIT)`;
        case 'CC-0':
            return `the [Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/) license`;
        case 'GPLv3':
            return `the [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0) license`;
        case 'BSD-3-Clause':
            return `the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)`;
        case 'WTFPL':
            return `the [The Do What the Fuck You Want to Public License](http://www.wtfpl.net/about/)`;
        default:
    }
};

module.exports = {
    chooseBadge,
    chooseLicense
};