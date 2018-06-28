ember-cli-deploy-s3-pack

> An ember-cli-deploy plugin pack to implement a simple S3 deployment pattern

![](https://ember-cli-deploy.github.io/ember-cli-deploy-version-badges/plugins/ember-cli-deploy-s3-pack.svg)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-deploy-s3-pack.svg)](http://emberobserver.com/addons/ember-cli-deploy-s3-pack)

This package bundles the plugins you need to have a deployment pipeline for your Ember app to S3. It is based on the [AWS](https://github.com/kpfefferle/ember-cli-deploy-aws-pack) pack, but does not assume you are using Cloudfront.

It also has a blueprint for your `config/deploy.js` file to get you started.

## Installation

```
ember install ember-cli-deploy
ember install ember-cli-deploy-s3-pack
```

The necessary set of plugins will be available to ember-cli-deploy and an example `deploy/config.js` file will be generated for you to customize with information for your deployment environments.

## What is a plugin pack?

A "plugin pack" is a concept supported by ember-cli-deploy that allows a single addon to make multiple plugins available by adding a single direct dependency to your project.

## What plugins are made available?

* [ember-cli-deploy-build](https://github.com/ember-cli-deploy/ember-cli-deploy-build)
* [ember-cli-deploy-s3](https://github.com/ember-cli-deploy/ember-cli-deploy-s3)
* [ember-cli-deploy-s3-index](https://github.com/ember-cli-deploy/ember-cli-deploy-s3-index)
* [ember-cli-deploy-revision-data](https://github.com/ember-cli-deploy/ember-cli-deploy-revision-data)
* [ember-cli-deploy-display-revisions](https://github.com/ember-cli-deploy/ember-cli-deploy-display-revisions)
* [ember-cli-deploy-manifest](https://github.com/ember-cli-deploy/ember-cli-deploy-manifest)
* [ember-cli-deploy-gzip](https://github.com/ember-cli-deploy/ember-cli-deploy-gzip)

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
