#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');
const program = require('commander');
const execa = require('execa');

program
  .version('1.0.0')
  .usage('<app-name>')
  .arguments('<app-name>')
  .action(create)
  .parse(process.argv);

const dependencies = ['react-native-kondo', 'react-navigation-stack'];
const devDependencies = [
  '@types/expo',
  '@types/jest',
  '@types/react-native',
  '@types/react-navigation',
  '@types/react-test-renderer',
  '@types/react',
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
  'eslint-config-prettier',
  'eslint-plugin-import',
  'eslint-plugin-react-hooks',
  'eslint-plugin-react',
  'eslint',
  'fs-extra',
  'jest-expo',
  'jest-fetch-mock',
  'jest',
  'lodash.merge',
  'prettier',
  'react-native-testing-library',
  'react-test-renderer',
  'ts-jest',
  'typescript',
];
const expoDependencies = [
  'expo-asset',
  'expo-constants',
  'expo-constants',
  'expo-font',
  'react-native-gesture-handler',
  'react-native-reanimated',
  'react-native-screens',
  'react-navigation',
];
const scripts = {
  lint: 'eslint . --ext .js,.jsx,.ts,.tsx',
  prettier: "prettier --write '**/*'",
  start: 'expo start',
  test: 'jest',
  tsc: 'tsc',
};

async function create(appName) {
  try {
    const targetDirectory = path.resolve(process.cwd(), appName);
    const execaOpts = { stdio: 'inherit', cwd: targetDirectory };

    await execa('expo', ['init', '--npm', '--template', 'blank', appName], {
      ...execaOpts,
      cwd: process.cwd(),
    });
    console.log(
      'Installing additional dependencies... (e.g. TypeScript, ESLint, Prettier, Jest)',
    );
    await execa('expo', ['install', ...expoDependencies], execaOpts);
    await execa('npm', ['i', ...dependencies], execaOpts);
    await execa('npm', ['i', '-D', ...devDependencies], execaOpts);
    console.log('Setting up project structure...');
    await fs.copy(
      path.resolve(__dirname, '../template'),
      path.resolve(targetDirectory),
    );

    const pkg = await fs.readJSON(
      path.resolve(targetDirectory, 'package.json'),
    );

    await fs.writeJSON(
      path.resolve(targetDirectory, 'package.json'),
      { ...pkg, scripts },
      { spaces: 2 },
    );
    await execa.node('prettier', execaOpts);
    console.log('Done!');
  } catch (e) {
    console.error(e.stderr || e);
    process.exit(1);
  }
}
