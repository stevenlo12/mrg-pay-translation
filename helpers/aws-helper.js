const AWS = require('aws-sdk');
const fs = require('fs');

const rootDir = process.cwd();

require('dotenv').config({ path: `${rootDir}/.env` });

const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_S3_BUCKET, CLOUDFRONT_DISTRIBUTION_ID } = process.env;

const credential = {
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
};

const uploadTranslation = async (path) => {
  const s3 = new AWS.S3(credential);

  try {
    const uploadedFile = await s3
      .upload({
        Bucket: AWS_S3_BUCKET,
        Key: path.s3Key,
        Body: fs.createReadStream(path.file),
        ContentType: 'application/json',
      })
      .promise();

    return uploadedFile;
  } catch (err) {
    console.error(`Failed to upload ${path.file}:`, err);
    throw err;
  }
};

const invalidateCloudFront = async (paths) => {
  const cloudfront = new AWS.CloudFront(credential);
  const tempPaths = paths.map((path) => path.s3InvalidationPath);
  const params = {
    DistributionId: CLOUDFRONT_DISTRIBUTION_ID,
    InvalidationBatch: {
      CallerReference: `language-${Date.now()}`,
      Paths: {
        Quantity: tempPaths.length,
        Items: tempPaths,
      },
    },
  };

  try {
    await cloudfront.createInvalidation(params).promise();
    console.log('CloudFront invalidation successful.');
  } catch (err) {
    console.error('Failed to invalidate CloudFront:', err);
    throw err;
  }
};

module.exports = { uploadTranslation, invalidateCloudFront };
