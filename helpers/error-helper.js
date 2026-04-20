const rootDir = process.cwd();

const { ERROR_KEYS, ERROR_MESSAGES } = require(`${rootDir}/constant`);

const errorHandler = (err) => {
  if(err === ERROR_KEYS.CHANGES_EXIST) {
    return console.log(ERROR_MESSAGES.CHANGES_EXIST);
  } else{
    return console.log(ERROR_MESSAGES.ERROR_OCCURED(err));
  }
}

module.exports = { errorHandler };