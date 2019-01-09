# create-expo-app

## Usage

The commands have to be executed manually until process is automated

Initialize a blank Expo project →

`expo init --yarn --template blank YOUR_PROJECT_NAME`

Add dev dependencies →

`yarn add --dev typescript tslint tslint-react tslint-config-prettier prettier`

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

Add more dev dependencies →

`yarn add --dev jest jest-expo jest-fetch-mock ts-jest react-test-renderer react-native-testing-library`

Replace your `jest` object inside `package.json` →

```json
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

Add even more dev dependencies →

`yarn add --dev @types/expo @types/jest @types/react @types/react-native`

Complete the project directories/file structure so it matches the `template` directory →
