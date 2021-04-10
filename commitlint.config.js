/**
 *
 * Commit messages must respect pattern:
 * """
 * type(scope?): subject

 * body?

 * footer?
 * """
 * Example: feat(dashboardAtlas): Add new awesome feature to dashboard
 * Note: "BREAKING CHANGE" can be added to specify a breaking change (major version number needs to be incremented)
 *
 *
 * Types or scopes can be added in ajcfConventionalCommit.json file, in camelCase
 *
 * See more information here :
 * https://www.conventionalcommits.org/en/v1.0.0-beta.2/
 * https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional
 * https://commitlint.js.org/#/reference-rules
 *
 *
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ajcfConventionalCommit = require("./ajcfConventionalCommit.json");

const typesEnum = Object.keys(ajcfConventionalCommit.types);
const scopesEnum = Object.keys(ajcfConventionalCommit.commonScopes);

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [0, "always", 72],
    "scope-case": [2, "always", ["camel-case"]],
    "scope-empty": [0],
    "scope-enum": [2, "always", scopesEnum],
    "subject-case": [0, "always", ["lower-case"]],
    "subject-empty": [0],
    "type-empty": [0],
    "type-enum": [2, "always", typesEnum],
  },
};
