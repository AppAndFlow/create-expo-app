#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const fs = require('fs-extra');
const { execSync } = require('child_process');
const merge = require('lodash.merge');

(async () => {
  const envs = ['dev', 'prod'];
  const overrides = {
    dev: {
      expo: {
        ios: {},
        android: {},
        extra: {
          env: {
            name: 'dev',
          },
        },
      },
    },
    prod: {
      expo: {
        ios: {},
        android: {},
        extra: {
          env: {
            name: 'prod',
          },
        },
      },
    },
  };

  try {
    const env = process.argv[2];
    const appPath = path.resolve(__dirname, '..', 'app.json');

    if (!envs.includes(env)) {
      throw new Error(`Please specify a valid env (${[...envs].join(' ')})`);
    }

    const app = await fs.readJSON(appPath);
    const updatedApp = merge({}, app, overrides[env]);

    await fs.writeJSON(appPath, updatedApp, { spaces: 2 });
    execSync('./node_modules/.bin/prettier --write app.json', {
      stdio: 'inherit',
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
