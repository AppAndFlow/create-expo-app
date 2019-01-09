# create-expo-app

## Usage

_The commands have to be executed manually until process is automated_

Initialize a blank Expo project →

```sh
expo init --yarn --template blank YOUR_PROJECT_NAME
```

Add dev dependencies →

```sh
yarn add --dev typescript tslint tslint-react tslint-config-prettier prettier
yarn add --dev jest jest-expo jest-fetch-mock ts-jest react-test-renderer react-native-testing-library
yarn add --dev @types/expo @types/jest @types/react @types/react-native
```

Copy the configuration files located in the `template` directory →

`copy tsconfig.json`

`copy tslint.json`

`copy .prettierrc`

Replace your `scripts` object inside `package.json` →

```json
"scripts": {
  "lint": "tslint --config tslint.json --project tsconfig.json",
  "prettier": "prettier --write './src/**/*'",
  "test": "jest",
  "tsc": "tsc --noEmit"
}
```

Copy the Jest configuration file (`template/jest.config.js`) and setup file (`template/jest/setup.ts`)

Complete the project directories/file structure so it matches the `template` directory →
