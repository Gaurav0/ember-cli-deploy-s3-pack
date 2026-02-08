WARNING: Ember CLI v4.12.3 is not tested against Node v20.20.0. See "https://github.com/ember-cli/ember-cli/blob/master/docs/node-support.md" to find out which version of Node is best to use.
{
  "useYarn": true,
  "scenarios": [
    {
      "name": "ember-lts-4.4",
      "npm": {
        "devDependencies": {
          "ember-source": "~4.4.0"
        }
      }
    },
    {
      "name": "ember-lts-4.8",
      "npm": {
        "devDependencies": {
          "ember-source": "~4.8.0"
        }
      }
    },
    {
      "name": "ember-lts-4.12",
      "npm": {
        "devDependencies": {
          "ember-source": "~4.12.0"
        }
      }
    },
    {
      "name": "ember-lts-5.4",
      "npm": {
        "devDependencies": {
          "ember-source": "~5.4.0"
        }
      }
    },
    {
      "name": "ember-lts-5.8",
      "npm": {
        "devDependencies": {
          "ember-source": "~5.8.0"
        }
      }
    },
    {
      "name": "ember-lts-5.12",
      "npm": {
        "devDependencies": {
          "ember-source": "~5.12.0"
        }
      }
    },
    {
      "name": "ember-lts-6.4",
      "npm": {
        "devDependencies": {
          "ember-source": "~6.4.0"
        }
      }
    },
    {
      "name": "ember-lts-6.8",
      "npm": {
        "devDependencies": {
          "ember-source": "~6.8.0"
        }
      }
    },
    {
      "name": "ember-release",
      "npm": {
        "devDependencies": {
          "ember-source": "https://s3.amazonaws.com/builds.emberjs.com/release/shas/cccdf86630f36f41b9044e3b70797c22f3488704.tgz"
        }
      }
    },
    {
      "name": "ember-beta",
      "npm": {
        "devDependencies": {
          "ember-source": "https://s3.amazonaws.com/builds.emberjs.com/beta/shas/28bcedcca41ca69dba6e2e752497b1c0ed126675.tgz"
        }
      }
    },
    {
      "name": "ember-canary",
      "npm": {
        "devDependencies": {
          "ember-source": "https://s3.amazonaws.com/builds.emberjs.com/canary/shas/7b7bb60a405c5d13a659e688c798ed9e200389c7.tgz"
        }
      }
    },
    {
      "name": "embroider-safe",
      "npm": {
        "devDependencies": {
          "@embroider/core": "^3.4.8",
          "@embroider/webpack": "^4.0.0",
          "@embroider/compat": "^3.4.8",
          "webpack": "^5.0.0"
        }
      },
      "env": {
        "EMBROIDER_TEST_SETUP_OPTIONS": "safe"
      }
    },
    {
      "name": "embroider-optimized",
      "npm": {
        "devDependencies": {
          "@embroider/core": "^3.4.8",
          "@embroider/webpack": "^4.0.0",
          "@embroider/compat": "^3.4.8",
          "webpack": "^5.0.0"
        }
      },
      "env": {
        "EMBROIDER_TEST_SETUP_OPTIONS": "optimized"
      }
    }
  ]
}
