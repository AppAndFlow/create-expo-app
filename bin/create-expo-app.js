#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');
const program = require('commander');
const execa = require('execa');
const ora = require('ora');

program
  .version('1.0.0')
  .usage('<app-name>')
  .arguments('<app>')
  .option('-s, --silent', 'scaffold app without printing to stdout')
  .action(app => create(app))
  .parse(process.argv);

const devDepencendies = [
  '@types/expo',
  '@types/jest',
  '@types/react-native',
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

async function create(app) {
  const spinner = ora('Creating Expo app');

  try {
    const targetDirectory = path.resolve(process.cwd(), app);
    const currentDirectory = process.cwd();

    spinner.start();
    await execa('expo', ['init', '--yarn', '--template', 'blank', app]);
    spinner.text =
      'Installing devDependencies (e.g. typescript, tslint, prettier, jest, ...)';
    await execa('yarn', ['add', '--dev', ...devDepencendies], {
      cwd: targetDirectory,
    });
    spinner.text =
      'Setting up project structure and creating configuration files';
    await fs.copy(
      path.resolve(currentDirectory, 'template'),
      path.resolve(targetDirectory),
    );
    spinner.text = 'Editing scripts';
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
