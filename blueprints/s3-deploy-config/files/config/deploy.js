/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    pipeline: {
      // This setting runs the ember-cli-deploy activation hooks on every deploy
      // which is necessary in order to run ember-cli-deploy-cloudfront.
      // To disable CloudFront invalidation, remove this setting or change it to `false`.
      // To disable ember-cli-deploy-cloudfront for only a particular environment, add
      // `ENV.pipeline.activateOnDeploy = false` to an environment conditional below.
      activateOnDeploy: true
    },
    "revision-data": {
      "type": "version-commit"
    }
  };

  if (deployTarget === 'staging') {
    ENV.build.environment = 'staging';
    ENV.s3.accessKeyId = process.env.ASSETS_STAGING_AWS_KEY;
    ENV.s3.secretAccessKey = process.env.ASSETS_STAGING_AWS_SECRET;
    ENV.s3.bucket = process.env.ASSETS_STAGING_BUCKET;
    ENV.s3.region = process.env.ASSETS_STAGING_REGION;
    ENV["s3-index"].accessKeyId = process.env.INDEX_STAGING_AWS_KEY;
    ENV["s3-index"].secretAccessKey = process.env.INDEX_STAGING_AWS_SECRET;
    ENV["s3-index"].bucket = process.env.INDEX_STAGING_BUCKET;
    ENV["s3-index"].region = process.env.INDEX_STAGING_REGION;
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.s3.accessKeyId = process.env.ASSETS_PRODUCTION_AWS_KEY;
    ENV.s3.secretAccessKey = process.env.ASSETS_PRODUCTION_AWS_SECRET;
    ENV.s3.bucket = process.env.ASSETS_PRODUCTION_BUCKET;
    ENV.s3.region = process.env.ASSETS_PRODUCTION_REGION;
    ENV["s3-index"].accessKeyId = process.env.INDEX_PRODUCTION_AWS_KEY;
    ENV["s3-index"].secretAccessKey = process.env.INDEX_PRODUCTION_AWS_SECRET;
    ENV["s3-index"].bucket = process.env.INDEX_PRODUCTION_BUCKET;
    ENV["s3-index"].region = process.env.INDEX_PRODUCTION_REGION;
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
