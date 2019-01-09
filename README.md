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

Replace your `scripts` and `jest` object inside `package.json` →

```json
"scripts": {
  "lint": "tslint --config tslint.json --project tsconfig.json",
  "prettier": "prettier --write './src/**/*'",
  "test": "jest",
  "tsc": "tsc --noEmit"
},
"jest": {
  "moduleFileExtensions": ["js", "jsx", "ts", "tsx"],
  "preset": "jest-expo",
  "setupFiles": ["./src/jest/setup.ts"],
  "testMatch": ["**/__tests__/**/*.ts?(x)"],
  "transform": { "^.+\\.tsx?$": "ts-jest" },
  "transformIgnorePatterns": ["node_modules/(?!react-native|touchable)/"]
}
```

Copy the jest setup file located in the `template/src/jest` directory →

`copy setup.ts`

Complete the project directories/file structure so it matches the `template` directory →
