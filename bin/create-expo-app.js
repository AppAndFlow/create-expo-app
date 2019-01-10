#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');
const program = require('commander');
const execa = require('execa');
const ora = require('ora');

program
  .version('1.0.0')
  .usage('<app-name>')
  .arguments('<app-name>')
  .action(appName => create(appName))
  .parse(process.argv);

const dependencies = ['react-navigation'];
const devDependencies = [
  '@types/expo',
  '@types/jest',
  '@types/react-native',
  '@types/react-navigation',
  '@types/react-test-renderer',
  '@types/react',
  'jest-expo',
  'jest-fetch-mock',
  'jest',
  'prettier',
  'react-native-testing-library',
  'react-test-renderer',
  'ts-jest',
  'tslint-config-prettier',
  'tslint-react',
  'tslint',
  'typescript',
];
const pkgScripts = {
  lint: 'tslint --config tslint.json --project tsconfig.json',
  prettier: "prettier --write './src/**/*'",
  test: 'jest',
  tsc: 'tsc --noEmit',
};

async function create(appName) {
  const spinner = ora('Creating Expo app');

  try {
    const targetDirectory = path.resolve(process.cwd(), appName);

    spinner.start();
    await execa('expo', ['init', '--yarn', '--template', 'blank', appName]);
    spinner.text = 'Installing dependencies and setting up project structure';
    await execa('yarn', ['add', ...dependencies], { cwd: targetDirectory });
    await execa('yarn', ['add', '--dev', ...devDependencies], {
      cwd: targetDirectory,
    });
    await fs.copy(
      path.resolve(__dirname, 'template'),
      path.resolve(targetDirectory),
    );
    // edit `package.json` to include our scripts
    const pkg = await fs.readJSON(
      path.resolve(targetDirectory, 'package.json'),
    );
    await fs.writeJSON(
      path.resolve(targetDirectory, 'package.json'),
      { ...pkg, scripts: pkgScripts },
      { spaces: 2 },
    );
    spinner.text = 'Done!';
    spinner.succeed();
  } catch (e) {
    spinner.fail();
    console.log('Something went wrong!');
    console.log(e.stderr || e);
    process.exit(1);
  }
}
