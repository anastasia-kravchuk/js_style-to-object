'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString
    .split(';')
    .map((fragment) => fragment.trim())
    .filter((line) => line.length > 0);

  const entries = declarations
    .map((declaration) => {
      const [name, ...valueParts] = declaration.split(':');

      if (valueParts.length === 0) {
        return null;
      }

      const value = valueParts.join(':').trim();

      return [name.trim(), value];
    })
    .filter((line) => line.length > 0);

  return Object.fromEntries(entries);
}

module.exports = convertToObject;
