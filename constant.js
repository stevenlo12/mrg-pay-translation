const ERROR_KEYS = {
  CHANGES_EXIST: "CHANGES_EXIST",
  ERROR_OCCURED: "ERROR_OCCURED",
}

const ERROR_MESSAGES = {
  [ERROR_KEYS.CHANGES_EXIST]: "",
  [ERROR_KEYS.ERROR_OCCURED]: (err) => `\nAn unexpected error occurred: ${err}\n`
}

module.exports = { ERROR_KEYS, ERROR_MESSAGES };