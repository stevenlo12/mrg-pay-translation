const rootDir = process.cwd();

require('dotenv').config({ path: `${rootDir}/.env` });

const isProduction = process.env.ENV === 'production';

const CONFIG = {
  paths: [
    {
      file: `${rootDir}/languages/id.json`,
      s3Key: isProduction ? 'language/id.json' : 'language/beta/id.json',
      s3InvalidationPath: isProduction ? '/language/id.json' : '/language/beta/id.json'
    },
    {
      file: `${rootDir}/languages/en.json`,
      s3Key: isProduction ? 'language/en.json' : 'language/beta/en.json',
      s3InvalidationPath: isProduction ? '/language/en.json' : '/language/beta/en.json'
    },
    {
      file: `${rootDir}/languages/de.json`,
      s3Key: isProduction ? 'language/de.json' : 'language/beta/de.json',
      s3InvalidationPath: isProduction ? '/language/de.json' : '/language/beta/de.json'
    },
    {
      file: `${rootDir}/languages/es.json`,
      s3Key: isProduction ? 'language/es.json' : 'language/beta/es.json',
      s3InvalidationPath: isProduction ? '/language/es.json' : '/language/beta/es.json'
    },
    {
      file: `${rootDir}/languages/fr.json`,
      s3Key: isProduction ? 'language/fr.json' : 'language/beta/fr.json',
      s3InvalidationPath: isProduction ? '/language/fr.json' : '/language/beta/fr.json'
    },
    {
      file: `${rootDir}/languages/it.json`,
      s3Key: isProduction ? 'language/it.json' : 'language/beta/it.json',
      s3InvalidationPath: isProduction ? '/language/it.json' : '/language/beta/it.json'
    },
    {
      file: `${rootDir}/languages/pt.json`,
      s3Key: isProduction ? 'language/pt.json' : 'language/beta/pt.json',
      s3InvalidationPath: isProduction ? '/language/pt.json' : '/language/beta/pt.json'
    }
  ],
};

module.exports = { CONFIG };