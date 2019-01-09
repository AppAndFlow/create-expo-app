#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const program = require('commander');
const execa = require('execa');

program
  .version('0.0.1')
  .usage('<app>')
  .arguments('<app>')
  .option('-s, --silent', 'scaffold app without printing to stdout')
  .action(app => {
    create(app);
  })
  .parse(process.argv);

const dependencies = [];
const devDepencendies = [
  'typescript',
  'tslint',
  'tslint-react',
  'tslint-config-prettier',
  'prettier',
  'jest',
  'jest-expo',
  'jest-fetch-mock',
  'ts-jest',
  'react-test-renderer',
  'react-native-testing-library',
  '@types/expo',
  '@types/jest',
  '@types/react',
  '@types/react-native',
];

async function create(app) {
  try {
    const currentDirectory = process.cwd();
    const targetDirectory = path.resolve(process.cwd(), app);

    console.log('Creating new Expo app', targetDirectory);
    const { stdout } = await execa('expo', [
      'init',
      '--yarn',
      '--template',
      'blank',
      app,
    ]);
    console.log(
      'Installing devDepencies (e.g. typescript, tslint, prettier, ...)',
    );
    await execa('yarn', ['add', '--dev', ...devDepencendies], {
      cwd: targetDirectory,
    });
    console.log(
      'Creating configuration files (e.g. tsconfig.json, tslint.json, ...)',
    );
    fs.copyFileSync(
      path.resolve(currentDirectory, 'template', 'tsconfig.json'),
      path.resolve(targetDirectory, 'tsconfig.json'),
    );
    fs.copyFileSync(
      path.resolve(currentDirectory, 'template', 'tslint.json'),
      path.resolve(targetDirectory, 'tslint.json'),
    );
    fs.copyFileSync(
      path.resolve(currentDirectory, 'template', '.prettierrc'),
      path.resolve(targetDirectory, '.prettierrc'),
    );
    console.log(stdout);
  } catch (e) {
    console.log('Something went wrong', e);
    process.exit(1);
  }
}
