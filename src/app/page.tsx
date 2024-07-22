// app/page.tsx
import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-5">
          Next.js Custom Project Setup Guide
        </h1>
        <p className="mb-4">
          This project is set up with the following tools and configurations:
        </p>
        <ul className="list-disc list-inside mb-5">
          <li>
            <strong>Next.js:</strong> A React framework for server-side
            rendering and static site generation.
          </li>
          <li>
            <strong>Tailwind CSS:</strong> A utility-first CSS framework for
            rapid UI development.
          </li>
          <li>
            <strong>ESLint:</strong> A tool for identifying and fixing linting
            issues in JavaScript and TypeScript code.
          </li>
          <li>
            <strong>Prettier:</strong> A code formatter to ensure consistent
            code style across the project.
          </li>
          <li>
            <strong>PostCSS:</strong> A tool for transforming CSS with
            JavaScript plugins.
          </li>
          <li>
            <strong>Autoprefixer:</strong> A PostCSS plugin to parse CSS and add
            vendor prefixes.
          </li>
          <li>
            <strong>Husky:</strong> A tool for managing Git hooks to enforce
            code quality and run scripts before commits and pushes.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Setup Steps</h2>

        <h3 className="text-xl font-semibold mb-2">
          1. Create a Next.js Project
        </h3>
        <pre className="bg-gray-200 p-3 rounded mb-5">
          <code>npx create-next-app my-nextjs-project</code>
        </pre>

        <h3 className="text-xl font-semibold mb-2">2. Install Tailwind CSS</h3>
        <pre className="bg-gray-200 p-3 rounded mb-5">
          <code>
            {`npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p`}
          </code>
        </pre>
        <p className="mb-4">
          Configure <code>tailwind.config.js</code>:
        </p>
        <pre className="bg-gray-200 p-3 rounded mb-5">
          <code>
            {`module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
          </code>
        </pre>
        <p className="mb-4">
          Add the following to <code>styles/globals.css</code>:
        </p>
        <pre className="bg-gray-200 p-3 rounded mb-5">
          <code>{`@tailwind base;\n@tailwind components;\n@tailwind utilities;`}</code>
        </pre>

        <h3 className="text-xl font-semibold mb-2">
          3. Install ESLint and Prettier
        </h3>
        <pre className="bg-gray-200 p-3 rounded mb-5 overflow-auto">
          <code>{`npm install -D eslint prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import eslint-config-airbnb eslint-config-prettier eslint-plugin-prettier`}</code>
        </pre>
        <p className="mb-4">
          Create <code>.eslintrc.json</code>:
        </p>
        <pre className="bg-gray-200 p-3 rounded mb-5 h-[600px] overflow-auto">
          <code>
            {`{
  "env": {
    "browser": true,
    "commonjs": false,
    "es6": true,
    "node": true
  },
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"]
    }
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "plugins": ["@typescript-eslint", "react", "react-hooks", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    // Disable have to declare file extensions
    "import/extensions": "off",
    // Disable the need to have file extention as JSX
    "react/jsx-filename-extension": "off",
    // Enables Prop Spreading
    "react/jsx-props-no-spreading": "off",
    // Have to wrap JSX in paranenthesis, disabled in declarations and assignment
    "react/jsx-wrap-multilines": [
      "error",
      {
        "declaration": false,
        "assignment": false
      }
    ],
    "no-restricted-exports": [
      "error",
      {
        // Restricted Export Variable Names
        "restrictedNamedExports": []
      }
    ],
    // Allow using named export
    "import/prefer-default-export": "off",
    // Use of any not Allowed
    "@typescript-eslint/no-explicit-any": "error",
    //
    //
    // Air Bnb Rules
    // Only 1 React Component per File
    "react/no-multi-comp": "error",
    // Prefer ES6 Class
    "react/prefer-es6-class": [2, "always"],
    // Prefer Stateless Function, must be a function or functional component
    "react/prefer-stateless-function": "error",
    // Align Closing Bracket Location
    "react/jsx-closing-bracket-location": "error",
    // Align Closing Tag Location
    "react/jsx-closing-tag-location": "error",
    // Boolean value should be declared properly
    "react/jsx-boolean-value": "error",
    // Image must have alt or role defined
    "jsx-a11y/alt-text": "off",
    // Aria Roles Defination should be correct
    "jsx-a11y/aria-role": "off",
    // React Rule of Hook
    "react-hooks/rules-of-hooks": "error",
    // No Exhastive Dependencies
    "react-hooks/exhaustive-deps": "error",
    // No Unresolved Imports
    "import/no-unresolved": "off",
    // Object Curly Brackets should be in Newline
    "object-curly-newline": "off",
    // No arrow linebreak
    "implicit-arrow-linebreak": "off",
    // Function paren newline rule
    "function-paren-newline": "off",
    // We are using _id in many cases
    "no-underscore-dangle": "off",
    // Enable no shadow according to typescript
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    // Function Component Defination
    "react/function-component-definition": "off",
    // Unsed Var issue with Typescript
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    // Let Prettier Handle
    "indent": "off",
    "operator-linebreak": "off",
    "quote-props": "off",
    "react/jsx-curly-newline": "off",
    "linebreak-style": "off",
    "no-confusing-arrow": "off",
    "react/jsx-one-expression-per-line": "off",
    "max-len": [
      "error",
      {
        "code": 300
      }
    ],
    //Enable to declare empty interface
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        "allowSingleExtends": true
      }
    ],
    "react/require-default-props": "off",
    // Disabled incase we need to pass prop directly to controller
    "react/no-unused-prop-types": "off"
  },
  "ignorePatterns": [
    "node_modules/",
    "dist/",
    "src/components/ui"
  ]
}

`}
          </code>
        </pre>
        <p className="mb-4">
          Create <code>.prettierrc</code>:
        </p>
        <pre className="bg-gray-200 p-3 rounded mb-5">
          <code>
            {`{
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "all",
  "endOfLine": "lf",
  "tabWidth": 2
}
`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Page;
