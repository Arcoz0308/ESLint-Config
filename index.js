module.exports = {
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "project": true
    },
    "plugins": ["@typescript-eslint/eslint-plugin"],
    "ignorePatterns": [
      "dist",
      "build",
      "*eslintrc.js",
      "node_modules"
    ],
    "rules": {
      "indent": ["error", 2, {"SwitchCase": 1}],
  
      "quotes": ["error", "double"],
      
      "semi": ["error", "always"],
      "semi-style": ["error", "last"],
      
      "linebreak-style": "off",
  
      "brace-style": "error",
      "comma-style": ["error", "last"],
      "comma-dangle": ["error", {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "never",
        "exports": "never",
        "functions": "never"
      }],
  
      "arrow-spacing": "error",
      "block-spacing": "error",
      "semi-spacing": "error",
      "comma-spacing": ["error", { "before": false, "after": true }],
      "computed-property-spacing": ["error", "never"],
      "array-bracket-spacing": ["error", "never"],
      "func-call-spacing": ["error", "never"],
      "key-spacing": ["error", { "beforeColon": false, "afterColon": true, "mode": "strict" }],
      "object-curly-spacing": ["error", "always"],
      "rest-spread-spacing": ["error", "never"],
      "template-curly-spacing": "error",
      "template-tag-spacing": "error",
      "keyword-spacing": ["error", { "before": true, "after": true }],
  
      "operator-linebreak": ["error", "before"],
      "implicit-arrow-linebreak": ["error", "beside"],
  
      "padded-blocks": ["error", { "classes": "always" }],
  
      "space-infix-ops": "error",
      "space-unary-ops": "error",
      
      "space-before-blocks": "error",
      "space-before-function-paren": ["error", "never"],
  
      "new-parens": "error",
      "space-in-parens": ["error", "never"],
  
      "function-paren-newline": ["error", "consistent"],
      "function-call-argument-newline": ["error", "consistent"],
  
      "dot-location": ["error", "property"],
  
      "eol-last": ["error", "never"],
  
      "lines-between-class-members": ["error", "always"],
  
      "max-len": ["error", { "code": 150 }],
  
      "no-multiple-empty-lines": "error",
      "no-tabs": "error",
      "no-trailing-spaces": "error",
      "no-whitespace-before-property": "error",
  
      "nonblock-statement-body-position": ["error", "beside"],
  
      "no-regex-spaces": "error",
  
      "camelcase": "error",
  
      "@typescript-eslint/explicit-function-return-type": ["error", { "allowExpressions": true }],
  
      "@typescript-eslint/member-delimiter-style": [
        "error", 
        {
          "multiline": {
            "delimiter": "semi",
            "requireLast": true
          },
          "singleline": {
            "delimiter": "semi",
            "requireLast": false
          }
        }
      ],
  
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          "fixStyle": "separate-type-imports" 
        }
      ],
  
      "@typescript-eslint/consistent-type-assertions": ["error", { "assertionStyle": "as" }],
  
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  
      "@typescript-eslint/method-signature-style": ["error", "property"],
  
      "@typescript-eslint/no-confusing-non-null-assertion": "error"
    }
  }