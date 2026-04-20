const rootDir = process.cwd();

const { gitHasChanges } = require(`${rootDir}/helpers/github-helper`);
const { uploadTranslation, invalidateCloudFront } = require(`${rootDir}/helpers/aws-helper`);
const { ERROR_KEYS } = require(`${rootDir}/constant`);
const { CONFIG } = require(`${rootDir}/config`);
const { errorHandler } = require(`${rootDir}/helpers/error-helper`);

const mainFunction = async () => {
  if (gitHasChanges()) {
    console.log("\n");
    console.log('There are changes in the Git repository,');
    console.log('Please commit your changes, and make sure the code is approved!\n\n');

    throw(ERROR_KEYS.CHANGES_EXIST)
  } else {
    try {
      await Promise.all(CONFIG.paths.map((path) => uploadTranslation(path)));
      await invalidateCloudFront(CONFIG.paths);
  
      return console.log('All files uploaded and CloudFront invalidated successfully.');
    } catch (err) { 
      errorHandler(err)
      process.exit(1);
    }
  }
};

mainFunction();
