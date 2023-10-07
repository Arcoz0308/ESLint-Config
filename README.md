# Arcoz0308@ESLint-Config

My ESLint config are inspered of [Bluzzi ESLint config](https://github.com/Bluzzi/ESLint-Config) !

## Setup

### Install packages 
```cmd
pnpm add eslint @arcoz/eslint-config
```

### config `.eslintrc`
```json
{
    "extends": "@arcoz"
}
```
### Add script for package.json
For example:

```json 
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```