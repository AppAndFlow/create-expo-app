# create-expo-app

A somewhat opinionated way to create React Native apps using Expo.

It provides configuration and a reasonable set of rules, it ensures that tooling and developer dependencies work well together (e.g. TypeScript, ESLint, Prettier, Jest, ...), and lastly, it creates a basic project structure.

## Usage

```sh
npx https://github.com/AppAndFlow/create-expo-app <app-name>
```

## Prerequisites

- [Expo CLI](https://www.npmjs.com/package/expo-cli)

## Includes

- Expo
- TypeScript
- ESLint
- Prettier
- Jest
- React Navigation
- react-native-testing-library
- react-native-kondo
- Preloading & caching of local assets on app startup
- Environment variables script
- CI workflow (via GitHub Actions) to lint, typecheck & test
- Minimal project structure
