
## Introduction:

TypeScript is a **superset of JavaScript** that adds static typing and other useful features to make development easier and safer. However, browsers and Node.js cannot execute TypeScript code directly. So, before running it, we need to convert TypeScript code into JavaScript. This process is known as 
**Compilation**.TypeScript uses a tool called `tsc` (TypeScript Compiler) to handle this process.

## What Happens During TypeScript Compilation?

1. **Parsing:** Reads the code and creates an internal structure called AST.
2. **Binding:** Identifies variables, functions, and their relationships.
3. **Type Checking:** Checks the code for type errors.
4. **JavaScript Emission:** Converts TypeScript code into JavaScript files.

## What is tsconfig.json?
The `tsconfig.json` file is used to configure a TypeScript project. It tells the TypeScript compiler how to compile and type-check the project's TypeScript files.

## TypeScript Project Structure

```text
ts-project/
│
├── src/
│   └── script.ts
│
├── dist/
│   └── script.js
│
├── node_modules/
├── package.json
├── tsconfig.json
└── package-lock.json
```
- `src/`: Contains TypeScript source files.
- `dist/`: Stores compiled JavaScript files.
- `node_modules/`: Contains installed dependencies.
- `package.json`: Stores project information and dependencies.
- `tsconfig.json`: Contains TypeScript compiler configuration.
- `package-lock.json`: Locks dependency versions.

## Example of tsconfig.json

Let's create a basic `tsconfig.json` file to configure our TypeScript project.

### Create the Configuration File

Open your terminal in VS Code and run:

```bash
npx tsc --init
```

This command creates a `tsconfig.json` file in your project directory.

###  Configure Compiler Options

Here is a simple example of `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```
### Understand the Compiler Options

- `target`: JavaScript output version.
- `module`: Defines the module system.
- `rootDir`: TypeScript source folder.
- `outDir`: Compiled JavaScript output folder.
- `strict`: Enables strict type checking.
- `esModuleInterop`: Improves module compatibility.
- `skipLibCheck`: Skips declaration file checking.
- `include`: Specifies files to include.
- `exclude`: Specifies files to exclude.

**Other Useful Options:**

- `sourceMap`: Generates source maps for debugging.
- `declaration`: Generates `.d.ts` files.
- `noUnusedLocals`: Reports unused variables.
- `noUnusedParameters`: Reports unused parameters.
- `noImplicitReturns`: Checks missing return statements.

###  Compile the Project :

After configuring `tsconfig.json`, run:

```bash
npx tsc
```
The compiler reads the configuration file, checks the TypeScript files, and generates JavaScript files inside the `dist` directory.

## Conclusion

TypeScript compilation converts TypeScript code into JavaScript that can run in browsers and Node.js. The `tsc` compiler handles parsing, type checking, and JavaScript generation, while `tsconfig.json` controls the compilation process. 