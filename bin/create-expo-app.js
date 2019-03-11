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
  .action(create)
  .parse(process.argv);

const dependencies = ['@appandflow/touchable', 'react-navigation'];
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
  'eslint-plugin-react',
  'eslint',
  'jest-expo',
  'jest-fetch-mock',
  'jest',
  'prettier',
  'react-native-testing-library',
  'react-test-renderer',
  'react',
  'ts-jest',
  'typescript',
];
const pkgScripts = {
  lint: "eslint 'src/**/*'",
  prettier: "prettier --write 'src/**/*'",
  test: 'jest',
  tsc: 'tsc --noEmit',
};

async function create(appName) {
  try {
    await execa('expo', ['init', '--npm', '--template', 'blank', appName], {
      stdio: 'inherit',
    });

    const targetDirectory = path.resolve(process.cwd(), appName);
    const spinner = ora(
      'Installing additional dependencies (e.g. Jest, Prettier, ESLint, TypeScript type definitions, ...) and setting up project structure',
    );

    spinner.start();
    await execa('npm', ['i', ...dependencies], { cwd: targetDirectory });
    await execa('npm', ['i', '-D', ...devDependencies], {
      cwd: targetDirectory,
    });
    await fs.copy(
      path.resolve(__dirname, '../template'),
      path.resolve(targetDirectory),
    );

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
